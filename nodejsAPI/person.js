let rs=require("fs").createReadStream('test.txt',{highWaterMark:10})
let data=[]
rs.on("data",function (chunk) {
    data.push(chunk)
})

rs.on("end",function () {
    let buf=Buffer.concat(data)
    console.log(buf.toString());
})