//获取目标及目录内容
const fs=require("fs");
const path=require("path")
//绝对路径
let target=path.join(__dirname,"../")
//读取
function tree(target,deep) {
    let prev=new Array(deep).join(`| `)
let dirinfo=fs.readdirSync(target)
// console.log(dirinfo);
//保存文件或文件夹/
let files=[];
let dirs=[];
for(let i=0;i<dirinfo.length;i++){
   let state=fs.statSync(path.join(target,dirinfo[i]));
   if(state.isFile()){
       files.push(dirinfo[i])
   }else{
       dirs.push(dirinfo[i])
   }
}
// console.log(files)
// console.log(dirs)
//遍历文件加
//文件夹
for(let i=0;i<dirs.length;i++){
    console.log(`${prev}├─ ${dirs[i]}`)
    //递归
    let nextPath=path.join(target,dirs[i]);
    let nextdeep=deep+1;//下一级的文件目录及层级
    tree(nextPath,nextdeep);

}

//文件操作
for(let i=files.length-1;i>=0;i--){
    if(i===0){
        console.log(`${prev}└─${files[i]}`)
    }else{
        console.log(`${prev}├─ ${files[i]}`)
    }
}
}

tree(target,1);
// deep   样式
// 1       "├─"
// 2       "|├─"
// 3       "| |├─"