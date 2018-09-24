let http=require("http")
let fs=require("fs")
let server=http.createServer(function (req,res) {
    // let headers=req.headers;
    // console.log(headers['cache-control']);
    // res.writeHead(200,{'Content-Type':'text/plain'})
    // res.end("<html><body><h1>Hello World!</h1></body></html>",function () {
    //     console.log("http cycle end");
    // })
    if(req.url==='/login'){
        switch (req.method){
            case "GET":
                fs.createReadStream("login.html").pipe(res);
                break;
            default:
                console.log("other request!");

        }
    }else{
        res.writeHead(302,{'location':'/login'});
        res.end();
    }
})
server.on("connection",function (req,res) {
    console.log("connected");
})
server.on("request",function (req,res) {
    console.log("request");
})
server.listen(3002)