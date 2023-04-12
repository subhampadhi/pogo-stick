import express from "express";
import { createProxyMiddleware } from 'http-proxy-middleware';

function proxyRequest(proxyReq: any) {
  console.log(proxyReq);
}

function proxyResponse(proxyRes: any) {
console.log(proxyRes);
}

const railsProxy = createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  onProxyReq: proxyRequest,
  onProxyRes: proxyResponse
});

const app = express();

app.use('/*', railsProxy);
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello, world!");
// });

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
