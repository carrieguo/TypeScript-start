// 3-1 变量声明
var number1 =1 
let number2 = 2
const number3 = 3
function doSomething(){
  for(var i=0; i<5; i++){
    console.log(i)
  }
  console.log("finally i=",i)
}

//课程3-3： number, string, boolean
function adds(n1: number, n2: number){
  return n1+n2;
}
console.log(adds(number1, number2))

let isTrue: boolean = true;

// isTrue = "true"

let total: number = 0
let firstName: string = "carrie"

//3-4 数组（Array）和元祖（Tupple）
let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]
let list3 = [1,2,3,4]
let list4 = [1, '222']
let list5: any[] = [1,"dss"]

//Tupple 固定长度，固定类型的数组
//声明元祖的时候一定要指明类型
let person1: [number, string] = [1, 'aaa']
// person1[0] = 'sss'
person1.push(3) //bug可以push项突破tupple的节限，注意,

//下面是联合类型数组unionArray，不是Tupple, 既不是固定长度,也不固定类型，混合了number和string类型
let person2 = [1, 'www']
person2[0] = 'eee'
person2[3] = 3

//3-5 联合（Union）与文献（Literal）类型
let union : string | number
union = 2;
union = "ssss";
//union = true

let union2 : number | string | boolean | string[]
function merge(n1: number | string, n2: number | string , resultType:"as-number"|"as-string"){
  if(resultType==="as-string"){
    return n1.toString() + n2.toString()
  }
  if(typeof n1==="string" || typeof n2 === "string")
    return n1.toString() + n2.toString()
  else
    return n1+n2
}
let mergeNumber = merge(2,5, "as-number")
let mergeNumber2 = merge(2,5, "as-string")
let mergeString = merge("hello", "world", "as-number")
console.log(mergeNumber)
console.log(mergeNumber2)
console.log(mergeString)

//字面量类型 literal
//明确了取值数据的类型
let union3: 0 |1|2
// union3 = 4

let literal : 1 | "2" | true | [1,2,3,4]

//枚举类型 Enum
enum Color1 {
  red,
  green,
  blue
}
let color = Color1.blue
console.log(color)

enum Color2 {
  red = 5,
  green = '0',
  blue = 5
}