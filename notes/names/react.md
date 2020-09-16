JSX is a syntactic extension of JavaScript

JSX不能直接使用，需要编译成js，Babel

# React 特点
+ 1.声明式设计 −React采用声明范式，可以轻松描述应用。

+ 2.高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。

+ 3.灵活 −React可以与已知的库或框架很好地配合。

+ 4.JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。

+ 5.组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

+ 6.单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

demo:
```
const element = <h1>Hello, world!</h1>;
ReactDOM.render(
    element,
    document.getElementById('example')
);
```
注意：
+ React 元素都是不可变的。当元素被创建之后，你是无法改变其内容或属性的。
目前更新界面的唯一办法是创建一个新的元素，然后将它传入 ReactDOM.render() 方法
+ 语法上类似HTML语言，可以写一个独立的JS文件，然后引入到目标html页面中
+ 通过{}来使用表达式  
例子：
```
ReactDOM.render(
    <div>
      <h1>{1+1}</h1>
    </div>
    ,
    document.getElementById('example')
);
```
+ 推荐使用内联样式
```
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
ReactDOM.render(
    <h1 style = {myStyle}>菜鸟教程</h1>,
    document.getElementById('example')
);
```
+ 注释使用{/**/}
+ 支持数组 数组会自动展开所有成员
```
var arr = [
  <h1>菜鸟教程</h1>,
  <h2>学的不仅是技术，更是梦想！</h2>,
];
ReactDOM.render(
  <div>{arr}</div>,
  document.getElementById('example')
);
```
# React 组件
+ 自定义组件
```
function HelloMessage(props) {
    return <h1>Hello World!</h1>;
}
const element = <HelloMessage />;
 
ReactDOM.render(
    element,
    document.getElementById('example')
);
```
+ ES66 class组件
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}
```
如果我们需要向组件传递参数，可以使用 this.props 对象,实例如下

+ 复合组件
```
function Name(props) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
    return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
    return <h1>网站小名：{props.nickname}</h1>;
}
function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
    </div>
    );
}
 
ReactDOM.render(
     <App />,
    document.getElementById('example')
);
```