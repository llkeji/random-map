export default async (request) => {
    // 目标 URL
    const targetUrl = "https://ip.rss.ink";
    
    // 返回重定向响应
    return Response.redirect(targetUrl, 302);
  };
  