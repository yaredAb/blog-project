const fs = require('fs');

//read file
// const readFile = fs.readFile('./blog.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString())
// })

//write file

// const writeFile = fs.writeFile('./blog.txt', "Hello again", ()=>{
//     console.log("file was written");
// })


//making a directory

if(!fs.existsSync('./assets')){
    const mkDir = fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("folder created");
    }
    
})
}
else{
    fs.rmdir('./assets',()=>{
        console.log("folder removed");
    })
}