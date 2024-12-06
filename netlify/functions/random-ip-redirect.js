export default async (request) => {
    const targetUrl = "https://ip.rss.ink"; // 目标 URL
  
    // 你可以通过 fetch 来发起请求
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "User-Agent": request.headers.get("User-Agent"),  // 保持原始请求头
        "X-Forwarded-For": request.headers.get("X-Forwarded-For")  // 如果需要保持原始 IP
      }
    });
  
    // 将目标请求的响应返回给客户端
    const body = await response.text();
    return new Response(body, {
      status: response.status,
      headers: response.headers
    });
  };
  