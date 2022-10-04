//高内聚，低耦合：功能相关的事物应该放到同一个集合中，形成一个模块。模块之间相互独立，保持低耦合的状态。
interface IPoint {
  // x:number;
  // y:number;
  //使用getter 和setter懒人包时，运行tsc需要es5以上版本 ，命令 tsc -t es5 4-2.ts
  X:number;
  // getX: ()=> number;
  getY:()=>number;
  // setX:(value)=>void;
  setY:(value)=>void;
  //函数返回值为void
  drawPoint:()=>void;
  getDistances: (p:IPoint) => number;
}
export class Point implements IPoint {
  // x: number;
  // y:number;
  // constructor(x:number, y:number){
  //   this.x = x;
  //   this.y = y;
  // }
  //上面的简写 Access Modifier 访问修饰符：public
  constructor(private x:number, private y:number =2){}
  drawPoint = () =>{
    console.log("x:", this.x, "y:", this.y)
  }
  getDistances= (p: IPoint) => {
    return Math.pow(p.X-this.x, 2) + Math.pow(p.getY()-this.y, 2)
  };

  set X(value:number){
    if(value<0){
      throw new Error("value不能小于0")
    }
    this.x = value
  }
  get X(){
    return this.x
  }
  setY = (value:number) =>{
    if(value<0){
      throw new Error("value不能小于0")
    }
    this.y = value
  }
  getY = ()=>{
    return this.y
  }
}