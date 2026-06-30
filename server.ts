import 'dotenv/config'
import express, { Request, Response } from 'express'
import cors from 'cors'
import mysql, { RowDataPacket, ResultSetHeader } from 'mysql2/promise'
import bcrypt from 'bcryptjs'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  port: 3306,
  user: process.env.DB_USER || 'noacg_user',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'Galgame',
}

const db = mysql.createPool({
  ...dbConfig,
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

// ====== API 路由 ======

// 获取所有公司
app.get('/api/companies', async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query<RowDataPacket[]>('SELECT * FROM companies')
    res.json(rows)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : '未知错误'
    res.status(500).json({ error: msg })
  }
})

// 根据公司 ID 获取作品
app.get('/api/companies/:id/works', async (req: Request, res: Response) => {
  try {
    const [rows] = await db.query<RowDataPacket[]>(
      'SELECT * FROM works WHERE company_id = ? AND is_deleted = 0 ORDER BY release_date DESC',
      [req.params.id],
    )
    res.json(rows)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : '未知错误'
    res.status(500).json({ error: msg })
  }
})

// 登录
app.post('/api/login', async (req: Request, res: Response) => {
  const { username, password } = req.body
  const [rows] = await db.query<RowDataPacket[]>(
    'SELECT * FROM users WHERE username = ?',
    [username],
  )
  if (rows.length === 0) return res.status(401).json({ error: '用户名或密码错误' })

  const ok = await bcrypt.compare(password, rows[0].password_hash)
  if (!ok) return res.status(401).json({ error: '用户名或密码错误' })

  res.json({ ok: true, user: { id: rows[0].id, username: rows[0].username } })
})

// 注册
app.post('/api/register', async (req: Request, res: Response) => {
  const { username, password } = req.body
  if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' })

  const [exists] = await db.query<RowDataPacket[]>(
    'SELECT id FROM users WHERE username = ?',
    [username],
  )
  if (exists.length > 0) return res.status(409).json({ error: '用户名已存在' })

  const hash = await bcrypt.hash(password, 10)
  const [result] = await db.query<ResultSetHeader>(
    'INSERT INTO users (username, password_hash) VALUES (?, ?)',
    [username, hash],
  )
  res.json({ ok: true, user: { id: result.insertId, username } })
})

// ====== 启动 ======
app.listen(PORT, () => {
  console.log('后端已启动: http://localhost:' + PORT)
})
