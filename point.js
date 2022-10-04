"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    // x: number;
    // y:number;
    // constructor(x:number, y:number){
    //   this.x = x;
    //   this.y = y;
    // }
    //上面的简写 Access Modifier 访问修饰符：public
    function Point(x, y) {
        if (y === void 0) { y = 2; }
        var _this = this;
        this.x = x;
        this.y = y;
        this.drawPoint = function () {
            console.log("x:", _this.x, "y:", _this.y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.X - _this.x, 2) + Math.pow(p.getY() - _this.y, 2);
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            _this.y = value;
        };
        this.getY = function () {
            return _this.y;
        };
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value不能小于0");
            }
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
