//3-10 函数类型
let log =function(message){
  console.log(message)
}

let log2 = (message:string)=> console.log(message)
log2("hello")

// ?表示参数可选
let log3 = (message:string, code?:number) =>{
  console.log(message, code)
}
let log4 = (message:string, code:number=0) =>{
  console.log(message, code)
}
log3("helo", 2)