const mymodule=require('./addModule')

var x= 1002;
var y=34;
var z=mymodule.addNum(x,y);
var a=mymodule.subNum(x,y);

console.log(z);
console.log(a);

