<template>
    <div class="github-card" v-pet-tip="'我每天有在高强度写代码哦'">
        <div class="github-card-div"  v-pet-tip="'这是网站制作者的技术栈'">技术栈:Vue3 + Axios + Pinia + Node.js 极简后端 + MySQL</div>
        <div class="card-header">
        </div>
        <div class="calendar-box">
            <img src="https://ghchart.rshah.org/39d353/zhaizhe520" alt="GitHub Contributions" />
        </div>
    </div>
</template>

<style scoped>
.github-card-div{
    /* 添加下划线 */
  text-decoration: underline;
  /* 进阶控制（可选）：控制下划线的颜色 */
  text-decoration-color: #8ae639;
  /* 进阶控制（可选）：控制下划线的粗细 */
  text-decoration-thickness: 2px;
  /* 进阶控制（可选）：防止下划线切断字母的下延线（比如 g, j, p, q, y） */
  text-underline-offset: 4px;
    


}
/* 容器：黑底效果 */
.github-card {
    /* 基础布局 */
    max-width: 650px;
    padding: 24px;
    border-radius: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    cursor: pointer;
    
    /* 文字颜色：提高对比度，让内容更鲜亮 */
    color: #4a4a4a; 
    text-align: center;

    /* 背景渐变核心调整：
       左侧 0-15% 保留淡淡的冷灰色，然后过渡到亮眼的暖紫和亮橙 
    */
    background: linear-gradient(
        135deg, 
        #fce4ec 0%,    /* 起点：极浅的淡粉色（带一点点灰调的优雅粉） */
        #e3f2fd 15%,   /* 过渡：极浅的灰蓝色，作为“左侧一点灰”的实现 */
        #90caf9 50%,   /* 中间：清爽的天蓝色 */
        #c8e6c9 100%   /* 结尾：明亮的嫩草绿 */
    );

    /* 视觉特效 */
    /* 1. 外阴影：增加悬浮感，显得更“轻快” */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    
    /* 2. 内发光：改用纯白色，增加通透感，像毛玻璃一样亮堂 */
    inset: 0 0 15px rgba(255, 255, 255, 0.6);

    /* 3. 边框：极细的浅色描边，增加精致感 */
    border: 1px solid rgba(255, 255, 255, 0.4);

    /* 平滑过渡效果 */
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* 鼠标悬停时的动态效果，让它看起来更“活” */
.github-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.12);
}

.card-header {
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
}

.title {
    color: #0fc1ee;
    /* 浅灰色文字 */
    font-size: 20px;
}

.calendar-box {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/* 绿格子图片处理 */
.calendar-box img {
    width: 100%;
    height: auto;
    /* 稍微加一点亮感，让绿格子在黑底上更通透 */
    filter: saturate(1.2) brightness(1.1);
    transition: transform 0.3s ease;
}

</style>