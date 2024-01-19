export async function GET(request: Request) {
   const response = {"html":"<body id=\"i2mq\"><Box><Card title=\"Other title\" description=\"Other description\" id=\"irir\"></Card></Box><Box></Box></body>","css":"* { box-sizing: border-box; } body {margin: 0;}"}
   return Response.json(response)
}