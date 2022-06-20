// function Return Types & void
function adhd(n1, n2) {
    return n1 + n2;
}
function PrintResult(num) {
    console.log("Result: " + num);
}
function AddAnd(n1, n2, cb) {
    //function types and callbackes
    var result = n1 + n2;
    cb(result);
}
PrintResult(adhd(5, 12));
// function as type
// let combinevalue :(a:number,b:number)=>number;
var combinevalue;
combinevalue = adhd;
// combinevalue = PrintResult //wrong
// console.log(combinevalue(2,3))
// Function Types & Callbacks
AddAnd(10, 10, function (result) {
    console.log(result);
});
//unknown type
var userInput;
var username;
userInput = 69;
userInput = "max";
// Never (that dont return anything)
function generate(msg, code) {
    throw { msg: msg, errorcode: code };
}
generate("an error", 5000);
