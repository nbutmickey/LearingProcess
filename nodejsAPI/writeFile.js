let fs=require("fs")
fs.writeFile("write.txt","Hello Write",{flag:"a",encoding:"utf-8"},function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log("success");
})