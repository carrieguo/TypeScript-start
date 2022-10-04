//void undefined never
function printResult() : void{
  console.log('lalala')
}
console.log(printResult())

function printResult1() : undefined{
  console.log('lalala')
  return
}
//never 用来控制程序流程
//抛出异常，函数永远执行不完
function throwError(message:string, errorCode:number):never{
  throw{
    message,
    errorCode
  }
}
throwError("not found", 404)

function whileLoop(){
  while(true){
    console.log('hshs') 
  }
}
