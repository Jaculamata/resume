# css2:
## 1 选择器
通用选择器 *
元素选择器（W3C标准中被称为 类型选择器）  文档的基本元素 `p h1 em a`等
类选择器 . (html文档中标记为class)
属性选择器 （根据元素的属性及属性值来选择元素） `a[href] {color:red;}`
伪类 :
ID选择器 #
内联样式

### 伪类 伪元素
伪类像类选择器一样给某个已存在的元素添加额外的样式
伪元素则是给自己虚拟的元素添加样式

常用伪类（:）：hover active ; first-child last-child nth-child(n/odd/even )
常用伪元素（::)：before  after

`#`id .class 原元素
## 2 使用样式的类型
### 2.1外部样式表 external style sheet:
 ``` html
<link rel="stylesheet" type="text/css" href="mystyle.css">
```
### 2.2 内部样式表 internal style sheet；
``` html
<head>
<style>
hr {color:sienna;}
p {margin-left:20px;}
body {background-image:url("images/back40.gif");}
</style>
</head> 
```
### 2.3 内联样式 inline style sheet
```html
<p style="color:sienna;margin-left:20px">这是一个段落。</p>
```
一般来说 多重样式优先级 就近原则
但是如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。
### 2.4 多重样式优先级深入概念
内联样式（1000) > id 选择器(100) > 类选择器 (10)= 伪类选择器 = 属性选择器 > 标签选择器 = 伪元素选择器(1)
!important 优先级最高 
```html
    <style type="text/css">
        #redP p {
             /* 权值 = 100+1=101 */
             color:#F00;  /* 红色 */
        }
 
        #redP .red em {
             /* 权值 = 100+10+1=111 */
             color:#00F; /* 蓝色 */
 
        }
 
        #redP p span em {
             /* 权值 = 100+1+1+1=103 */
             color:#FF0;/*黄色*/
        }
    </style>
```
## 创建

# css3:最重要的模块：
+ 选择器
+ 盒模型
+ 背景和边框
+ 文字特效
+ 2D/3D转换
+ 动画
+ 多列布局
+ 用户界面