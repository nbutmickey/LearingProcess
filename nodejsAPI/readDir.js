let fs=require("fs")
function getAllFileFormPath(path) {
    fs.readdir(path,function (err,res) {
        console.log(res);
        for(let subPath of res){
            let statObj=fs.statSync(path+"/"+subPath)
            if(statObj.isDirectory()){
                console.log("Dir:",subPath);
                getAllFileFormPath(path+"/"+subPath)
            }else{
                console.log("File:",subPath);
            }
        }
    })
}
getAllFileFormPath(__dirname);