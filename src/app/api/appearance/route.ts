export async function GET(request: Request) {
   const response = {"html":"<body id=\"ic1p\"><CustomButton text=\"Custom Button\" testId=\"some-test-id\" id=\"ikfm\"></CustomButton><Card></Card><div id=\"iizv\">Um padrão</div></body>","css":"* { box-sizing: border-box; } body {margin: 0;}#iizv{padding:10px;}"}
   return Response.json(response)
}