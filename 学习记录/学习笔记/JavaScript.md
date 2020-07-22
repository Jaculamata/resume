# 强制转型
显示和隐式转换

# 数据类型
JS拥有动态类型，相同的变量可以作用于不同的类型
基本数据类型和引用数据类型
基本数据类型：
+ String  字符串
+ Number  数值
+ Boolean  布尔值
+ Null   空值
+ undefined 未定义
+ Symbol 
ES6中引入的新的数据类型 生成一个全局唯一的值

引用数据类型：
+ Object
```
var person={firstname:"John", lastname:"Doe", id:5566};
```
+ Array
```
var a=new Array() 
//需要初始化;
//或者写成
var a = new Array("das","dsa","das")
```
+ Function

# 作用域
变量在函数内声明，变量为局部作用域，局部变量只能在函数内部访问
函数外定义的变量为全局变量
如果变量在函数内没有声明，该变量会自动提升为全局变量
在html中，全局变量为window 所有的数据变量都属于window对象

js中，所有函数都能访问他们上一层的作用域

# 严格比较和类型转换比较
+ === 严格比较，在不允许强制转换类型的情况下检查两个值是否相等
+ == 抽象比较，在允许强制转型的情况下判断

# 回调函数
作为参数传递给另一个函数，并在某些操作完成后执行

# use strict 
ES5中提出，让代码进入严格模式，不能使用未声明的变量
出现在代码的顶部或者函数的顶部，如果错误的创建了全局变量为抛出错误

# 闭包
JS的变量可以是局部变量或者全局变量
私有变量就需要用到闭包

```
function createBase(baseNumber) {
 return function(N) {
 // 我们在这里访问 baseNumber，即使它是在这个函数之外声明的。
 // JavaScript 中的闭包允许我们这么做。
 return baseNumber + N;
 }
}
var addSix = createBase(6);
addSix(10);
addSix(21);
```

闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。直观来讲就是形成一个不销毁的栈环境
```
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3
```

# 事件冒泡
是指嵌套最深的元素触发一个事件，然后这个事件顺着嵌套顺序在父元素上触发。
防止事件冒泡的一种方法是使用event.cancelBubble 或者event.stopPropagation()(低于ie9)

# IIFE（立即调用函数表达式）
immediately-invoked function expression
函数被创建后立即被执行

# 比较两个对象
基本对象使用== 和 === 进行比较
深度比较可以使用deep-equal或者使用递归算法比较

# ES5和ES6的区别
ES5在所有标准浏览器中完全实现
ES6绝大多数现代浏览器部分实现
主要区别：
+ 箭头函数和字符串插值
```
const greetings = (name) => {
 return `hello ${name}`;
}
const greetings = name => `hello ${name}`;
```
+ 常量
常量在很多方面与其他语言中的常量一样，但有一些需要注意的地方。常量表示对值的“固定引用”。因此，在使用常量时，你实际上可以改变变量所引用的对象的属性，但无法改变引用本身。
```
const NAMES = [];
NAMES.push("Jim");
console.log(NAMES.length === 1); // true
NAMES = ["Steve", "John"]; // error
```
+ 块作用域变量
+ 默认参数值
+ 类定义和继承
+ for ... of 操作符
+ 对于对象合并的Spread操作
+ promise
+ 模块导出和导入
