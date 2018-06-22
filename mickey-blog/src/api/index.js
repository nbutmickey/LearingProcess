import axios from 'axios'
const post=(url,params={},isReturnData=false)=>{
  let updateParams=new URLSearchParams();
  for(let i in params){
    if(params.hasOwnProperty(i)){
      updateParams.append(i,params[i]);
    }
  }

  return new Promise((resolve,reject) =>{
    axios.post(url,updateParams).then(res =>{
      if(isReturnData){
        resolve(res);
        return;
      }
      resolve(res.data);
    }).catch(e=>{
      reject(e);
    })
  })
};

export default post;
