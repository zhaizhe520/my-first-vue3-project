import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'

const app = express()
const PORT = 3000

// 中间件
app.use(cors())
app.use(express.json())

// ====== 数据库连接配置 ======
// 改成你自己的 MariaDB 账号密码
const dbConfig = {
  host: 'xxxxxx',
  port: 3306,
  user: 'noacg_user',
  password: 'xxxxx',
  database: 'Galgame'
}

let db
let dbError = null

async function initDB() {
  try {
    db = await mysql.createConnection(dbConfig)
    console.log('MariaDB 连接成功')
  } catch (err) {
    dbError = err.message
    console.error('MariaDB 连接失败:', err.message)
    console.log('服务器仍会启动，但数据库功能不可用')
  }
}

// 把错误信息也暴露出去，方便排查
app.get('/api/db-status', (req, res) => {
  res.json({
    connected: !!db,
    error: dbError || null
  })
})

// ====== API 路由 ======

// 获取所有公司
app.get('/api/companies', async (req, res) => {
  if (!db) return res.status(500).json({ error: '数据库未连接' })
  try {
    const [rows] = await db.query('SELECT * FROM companies')
    res.json(rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// 数据库测试 —— 查数据库里有多少条数据
app.get('/api/db-test', async (req, res) => {
  if (!db) return res.status(500).json({ error: '数据库未连接' })
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS result')
    res.json({ ok: true, result: rows[0].result })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// ====== 启动 ======
app.listen(PORT, async () => {
  await initDB()
  console.log(`后端服务已启动: http://localhost:${PORT}`)
  console.log(`测试接口: http://localhost:${PORT}/api/hello`)
})
