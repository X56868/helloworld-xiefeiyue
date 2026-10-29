// 导入 Node.js 内置模块 http
const http = require('http');

// 定义服务器端口号
const PORT = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 设置响应头：状态码 200，内容类型为 HTML
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // 获取当前服务器时间
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // 返回 HTML 页面
  res.end(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World - X56868</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .card {
      background: white;
      border-radius: 20px;
      padding: 60px 80px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      text-align: center;
      max-width: 600px;
    }
    h1 {
      color: #333;
      font-size: 28px;
      margin-bottom: 30px;
      line-height: 1.6;
    }
    .time-box {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 20px 30px;
      margin-top: 20px;
    }
    .time-label {
      color: #888;
      font-size: 14px;
      margin-bottom: 8px;
    }
    .time-value {
      color: #667eea;
      font-size: 24px;
      font-weight: bold;
      font-family: "Courier New", monospace;
    }
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 12px;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Node.js 服务器运行中</div>
    <h1>Hello World！<br>我是【X56868】<br>我的第一个 AI 开发的网站</h1>
    <div class="time-box">
      <div class="time-label">当前服务器时间</div>
      <div class="time-value">${currentTime}</div>
    </div>
  </div>
</body>
</html>
  `);
});

// 启动服务器，监听 3000 端口
server.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`  服务器启动成功！`);
  console.log(`  访问地址: http://localhost:${PORT}`);
  console.log(`  按 Ctrl + C 停止服务器`);
  console.log(`=================================`);
});