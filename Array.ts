// concat() method return a new array comprised of this array joined with two or more arrays  
var alpha = ["a", "b", "c"];
var numeric1: any = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric1);
console.log("alphaNumeric concat() : " + alphaNumeric);

// every() method test whether all the element in an array passes the test implemented by thr provided function 
function isBigEnough(element: any, index: any, array: any) {
  return element >= 10;
}

var passedk = [12, 5, 8, 130, 44].every(isBigEnough);
console.log("every() Test Value  : " + passedk);

//filter() create new array with all of the elements of this array for ehich the provided filtering function return true

function isBigEnough1 (element:any,index:any,array:any){
    return (element >=10)
}

var passed = [12, 5, 8, 130, 44].filter(isBigEnough1);
console.log("filter() the test: "+passed)


// forEach() method calls a function for each element in the array syntax array.forEach(callback[, thisObject]);
let num1 =[1,23,33]
num1.forEach(function(Value){
    console.log("for each",Value)
})

// indexOf() method returns the first index at which a given element can be found in the ARRAY, or -1 if it is not present syntax: array.indexOf(searchElement[,fromIndex]);

var index = [12,5,8,130,44].indexOf(8)
console.log("indexOf is: "+ index)

// join() method joins all the elements of an array into string syntax: array.join(separtor);

var arr = new Array ("first","second","third");

var str = arr.join();
console.log("join str: "+ str);

var str = arr.join(",  ");
console.log("str: "+ str)

var str = arr.join("+");
console.log("str: "+ str)

// lastIndexOf() method return the last index at which a given element can be found in the array, or -1 if it is not present. the array is searched backwards ,starting at fromIndex syntax: array.lastIndexOf(serachElement[, fromIndex]);

var index2 =[12,3,45,66,859,8].lastIndexOf(8)
console.log("last index of "+ index2)

// map() method creates a new array with the result of calling a provided function on every element in this array array.map(callback[, thisObject])
var number =[1,16,9]
var roots = number.map(Math.sqrt)
console.log("map root is "+ roots)

//pop() method removes the last element from an array and returns the element stntax : array.pop

var num2 = [1,2,3,4,5]

var element = num2.pop();

console.log("last element is: "+ element)
var element = num2.pop();

console.log("last element is: "+ element)

// push() method append the given elements in the last of the array and returns the lenghth of the array syntax : array.push(element1, ..., elementN);
var num = new Array(1,4,9);
var lenghth1 = num.push(10);
console.log("new number is : "+ num)

// reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

var total = [0,1,2].reduce(function(a,  b){ return a + b }); 
console.log("total is : " + total );

// toString() method returns a string representing the source code of the specified array and its elements.

var ars = new Array ("aman","orange","mango")
var stw = ars.toString();
console.log("return string is: "+ stw)

// shift()method removes the first element from an array and returns that element.syntax: array.shift();
var a = [10, 1, 2, 3].shift(); 
console.log("Shifted value is : " + a);
