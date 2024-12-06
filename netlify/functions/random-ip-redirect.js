export default async (request) => {
    const targetUrl = "https://ip.rss.ink"; // 目标 URL
  
    try {
      // 发送请求到 https://ip.rss.ink
      const response = await fetch(targetUrl, {
        method: "GET",
        headers: {
          "User-Agent": request.headers.get("User-Agent"), // 保持原始请求头
          "X-Forwarded-For": request.headers.get("X-Forwarded-For") // 如果需要保持原始 IP
        }
      });
  
      // 获取响应体的内容
      const body = await response.text();
  
      // 获取响应头并转发给客户端
      const headers = new Headers(response.headers);
      headers.set("Content-Type", "text/html; charset=utf-8"); // 确保返回的内容类型正确
  
      // 返回响应
      return new Response(body, {
        status: response.status,
        headers: headers
      });
  
    } catch (error) {
      // 如果发生错误，返回适当的错误信息
      return new Response('Error: ' + error.message, { status: 500 });
    }
  };
  