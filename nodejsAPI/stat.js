let fs=require("fs")
fs.stat("test.txt",function (err,result) {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})