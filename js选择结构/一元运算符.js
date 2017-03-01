//var a  = 10
//var b  = 11

//运算符优先级的问题
//var result = (a + b) 
//console.log(result)//21
//
//var result = (a - b)
//console.log(result)//-1
//
//var result = (a * b)
//console.log(result)//110
//
//var result = (a / b)
//console.log(result)//0.909090...
//
//var result = (b % a)
//console.log(result)//1

//++ 自加 在本身的基础上进行+1操作
//var box = 1
//box++
//console.log(box)//2
//
//var box = 1
//++box
//console.log(box)//2

//var box1 = 10
//var box2 = box1++ //先赋值，再自加
//console.log(box2)//10
//
//var box1 = 10
//var box2 = ++box1// 先自加，再赋值
//console.log(box2)//11
//
//var box1 = 10
//var box2 = ++box1;
//var box3 = box1
//console.log(box3)//11
//
////多用前加，少用后加
//var box1 = 10
//var box2 = box1++ + ++box1
//console.log(box1)//12
//console.log(box2)//22


//var box1 = 10
//box1--
//console.log(box1)
//
//var box2 = 10;
//--box2
//console.log(box2)

//var string = '89'
//本质：调用了parseInt转换成整型之后在自加
//string++
//console.log(string)//90

//在转换成为整型的时候就已经失败了（NaN）
var string = 'happy'
string++
console.log(string)

var flag = false//0
flag++
console.log(flag)//1

var number = 3.3
number++
console.log(number)














