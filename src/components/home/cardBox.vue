<template>
    <div class="github-card" v-pet-tip="'我每天有在高强度写代码哦'">
        <div class="card-header">
        </div>
        <div class="calendar-box">
            <img src="https://ghchart.rshah.org/39d353/zhaizhe520" alt="GitHub Contributions" />
        </div>
    </div>
</template>

<style scoped>
/* 容器：黑底效果 */
.github-card {
    padding: 20px;
    /* 背景渐变：从 GitHub 蓝到一种温柔的暖紫色/橙色 */
    background: linear-gradient(135deg, #c7d8e8 0%, #e3b0cd 100%);

    border-radius: 12px;
    color: #b8b3b3;
    text-align: center;
    /* 增加一个非常淡的内发光，让暖色调更通透 */
    box-shadow: inset 0 0 20px rgba(216, 90, 74, 0.2);
    border: 1px solid rgba(227, 100, 100, 0.1);
    /* 淡淡的灰色边框 */
    border-radius: 6px;
    padding: 16px;
    max-width: 650px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    cursor: pointer;
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