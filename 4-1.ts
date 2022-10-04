// 4-1 对象 Object
const person:{
  firstName: string,
  lastName: string
} = {
  firstName: "carie",
  lastName: "guo"
}
console.log(person.firstName)
//ts中调用对象不存在的属性会报错
// console.log(person.age)