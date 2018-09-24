let http=require("http")
http.get("http://blockchain.info/ticker",function (res) {
    let statusCode=res.statusCode;
    console.log(statusCode);
    if(statusCode===200){
        let result='';
        res.on("data",function (data) {
            result+=data;
        })
        res.on("end",function () {
            console.log(result.toString());
        })
        res.on("error",function (e) {
            console.log(e.message);
        })
    }
})