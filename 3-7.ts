//3-7 any 和 unknown
// any 类型 语言灵活性快速开发
//any 适合代码快速上线 会遗留安全隐患
//unknow 可以保证类型的安全
let randomValue: unknown = 666
randomValue = true
randomValue = "aaa"
randomValue = {}
if(typeof randomValue === 'function')
randomValue() 
if(typeof randomValue === 'string')
randomValue.toUpperCase()