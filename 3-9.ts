//3-9 类型适配（类型断言） Type Assertions
let message:any;
message ="aaa";
message.endWith("c")
//将any类型适配为string类型
//方法1
let ddd = (<string>message).endsWith("sss")
//方法2
let ddd2 = (message as string).endsWith("aaa")