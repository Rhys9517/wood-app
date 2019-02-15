const express =require('express');


const server = express();



server.listen(9090, 'localhost', (error)=>{
    if(error){
        console.log('启动失败');
        console.log(error);
    }else{
        console.log('启动成功');
    }
})