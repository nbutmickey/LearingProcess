let fs=require("fs").readFileSync("test.txt",{encoding:"UTF-8"})
console.log(fs);
// let data=''
// fs.on("data",function (chunk) {
//     data+=chunk
// })
// fs.on("end",function () {
//     console.log(data);
// })
// console.log("Hello World");