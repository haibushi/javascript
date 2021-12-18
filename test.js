/*构造方法返回的是字符串  布尔  数值型  null  undefined的话   不影响原来的功能
  如果返回的是对象   这new出来的就是返回的对象
  这里是a1分支
  这里是abcd分支
  masterasdasd  test 111
function Myclass(){
    this.name = 'zhangsan';
    return true
}asdasd
var obj = new Myclass;asdasd
console.log(obj);
a1a1a1a1a1a1
asdadasd  123
*/

//这苦呼吁事故的可

/*asdasd
Function.prototype.bind = function(context){
    console.log(context);
}
dddddddsa
var obj = {name:"zhangsan"}
var func = function(){
    console.log(this.name);
}
func.call(obj);


function func(){
    var a=b=3;    //a是局部变量，b是全局变量
    var a=1,b=2  //a和b  都是局部变量
}
func();
//console.log(a);
console.log(b);



function func(){
    var a=1;
    return function(){
        a++;
        console.log(a);
    }
}

var f = func();
f();
f();
f();
f();
console.log(a);  //这里a还是一个局部变量的额

function func(){
    console.log(arguments);
    return function(){
        console.log(arguments);
    }
}

func(1,2)(3,4);
func(1,2,3);


var mult = (function(){
    return function(){
        var a = 0;
        for(var i =0; i<arguments.length;i++){
            a =  a + arguments[i]; 
        }
        return a;
    }
})()
console.log(mult(1,2))



//typeof 判断变量的类型  但是查看不到具体的数据类型
//如果是一个函数   那么就返回的是function
//如果是一个字符串  返回的就是String
//如果是一个数值    返回的就是number
//如果是一个Boolan  返回的就是布尔
//如果是一个数组    返回的是一个object
//如果是一个对象    返回的就是一个object
//如果是一个undefined  返回的就是一个undefined
//如果是一个null    返回的也是一个object
//使用object.prototype.toString.call（o）  这样可以查看到具体的数据类型
var func = function(){}
console.log(typeof func);
var arr = [];
console.log(typeof arr);
console.log(Object.prototype.toString.call(arr));



var o = 1;   //[object Number]
var o = 'a';   //[object String]
var o = true;    //[object Boolean]
var o = null;    //[object Null]
var o = undefined;  //[object Undefined]
var o = [1,23,3];  //[object Array]
var o = function(){};  //[object Function]
var o = new Date();    //[object Date]
var o = {};     //[object Object]
//console.log(Object.prototype.toString.call(o));

let typeArr = ['String','Number','Array','Null','Function','Object','Undefined'];
let typeObj = {};
for(var i=0;i<typeArr.length;i++){
    //console.log(typeArr[i]);
    (function(i){
        typeObj['is'+typeArr[i]] = function(o){
            console.log(typeArr[i]);
            
            //return Object.prototype.toString.call(o) == '[object '+typeArr[i]+']';
        }
    })(i)
    
}

typeObj.isString()
typeObj.isNumber()
typeObj.isString()
//console.log(typeObj);
//console.log(typeObj.isString());



var obj = {name:'zhangsan',age:15}
console.log(obj.hasOwnProperty('name'))
*/
//Object.defineProperties 修改或者添加对象的属性  这里是个复数 只是参数传递方式不一样
//Object.defineProperty(obj)  //也是修改或者添加对象的属性  这里是单数形式
var obj = {name:'lisi'};

/*
Object.defineProperty(obj,'name',{
    value:'zhangsan'
})

Object.defineProperties(obj,{
    name:{value:'11'},
    age:{value:22}
})
//console.log(obj.name);
//console.log(obj.age);
var val = Object.getOwnPropertyDescriptor(obj,'name');
//console.log(val);
*/
/*
//使用var定义的变量是不能直接删除的   直接写的变量  是可以直接用delete来删除的
var a = 1;
delete a;
console.log(a);
b = 1;
delete b;
console.log(b);
*/
//
//Object.getOwnPropertyNames(obj);
var obj = {name:'zhangsan',age:12}
//console.log(Object.entries(obj));  //生成的一个二维数组  [ [ 'name', '11' ],[ 'age', 12 ] ]


var arr = new Array(6);
//console.log(arr.length);
var arr1 = [6];
//console.log(arr1);

var arr2 = Array(6)
//console.log(arr2);


var arr3 = [1,23,4]
//console.log(arr3.includes(2));   //查看数组是否包含指定的值   返回一个布尔值   IE11都不支持的额


var func = function(val){
    return val>10;
}
//console.log(arr3.find(func));  //返回的是查找到的第一个数值
//console.log(arr3.findIndex(func))  //返回的是查找到的第一个数组对应的索引  同事IE11也都是不支持的额
/*
console.log(arr3.concat(22))


var key=1;
console.log({key});

var a = 1;
function aa(){
    //该函数内部有定义变量a   所以会有变量提升   也就是定义了变量但是还没有赋值
    if(false){
        var a = 2;
    }
    console.log(a);

}
aa();



function foo(){console.log(222);}
Function.prototype.mycall = function(){
    console.log(111);
}
//foo.mycall();


function Func(){
    console.log('Func');
}

Func.prototype = {
    handle:function(){
        console.log(111);
    }
}

console.log(Func.__proto__);

var func = new Func();
console.log(Object.prototype.toString.call(func));
func.handle();
//func.prototype.handle();

function f(){console.log(11)}
(function(){
    if(false){
        function f(){console.log('aaa')}
    }
    f();
}())

if(false){
    function f(){
        console.log(111);
    }
    f();
}

if(true){
    function f(){
        console.log(111);
    }
    f();
}




const arrs = [];
console.log(arrs);
arrs[0] = 1;
console.log(arrs);



var arrs = [
    {name:'a'},
    {name:'b'},
    {name:'c'},
    {name:'d'},
]
Array.prototype.aa = {name:'e'};
for(var value of arrs){
    if(value['name'] == 'a'){
        console.log(value);
        return;
    }
    console.log(value);
}*/

/*  forEach  不存在返回   循环过程不能终止    必须每一个值都遍历一遍之后才能停下来哦
var aa = arrs.forEach((value,key)=>{
    if(key == 0){
        return value;
    }
    console.log(value,key);
    
})
console.log(aa);
*/

var obj = {
    name : "zhangsan",
    _age:18,
    set age(val){
        console.log('set');
        this._age = val;
    },
    get age(){
        console.log('get');
        return this._age;
    }


}

console.log(obj);
//console.log(Object.getOwnPropertyNames(obj));
console.log(obj.age);
