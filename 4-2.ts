// 4-2 Interface 与 class
let drawPoint = (point) => {
  console.log({x: point.x,y:point.y})
}
//以下调用传参均不报错
drawPoint({x:105,y:24})
drawPoint({x:'333',y:'444'});
drawPoint({xc:'sss',yy:'www'});

//利用接口规范传参类型
let drawPoint2 = (point:Point1) => {
  console.log({x: point.x,y:point.y})
} 
interface Point1{
  x: number;
  y: number;
}

import {Point} from "./point"
const point = new Point(2,3)
point.drawPoint()

//对象object、类class、实例instance

//Access Modifier 访问修饰符
const point1 = new Point(24, 50)
//访问类中的变量应该加以限制
// point1.x = 30

//访问修饰符 public, private, protected
//point1.setX(30)
point1.X = 22
console.log(point1.X)