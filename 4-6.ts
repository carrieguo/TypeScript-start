//Generics泛型
//以下两种方式都声明了number类型数组
let list1: number[] = [1,2,3,4]
let list2: Array<number> = [1,2,3,4]

//<T>表示动态类型 泛型
//通过使用泛型。可以保持代码中类型的一致性，会自动识别数组中的类型
let lastInArray = <T>(arr: Array<T>) => {
  return arr[arr.length-1]
}

const l1 = lastInArray([1,2,3])
//泛型指定类型，规定<string>,保证类型的安全一致性
const l2 = lastInArray<string | number>(["a","b","c"])

let makeTuple = <T, Y=number>(x:T, y:Y) => [x, y]
const v1 = makeTuple(1, "one")
const v2 = makeTuple<boolean, number>(true, 1)