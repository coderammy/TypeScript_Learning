//Using TYpes
// Number
// typeof functionality
// In TypeScript, you work with types like string or number all the times.
// Important: It is string and number (etc.), NOT String, Number etc.
// The core primitive types in TypeScript are all lowercase!
//Number
function add(n1, n2) {
    // if(typeof n1 ! =='number' || typeof n2! =='number'){
    //     throw new Error ('in correct input')
    // }
    // Key difference is : javascript uses "dynamic types (resolve at runtime),typescript uses "static types"(set during development).
    return n1 + n2;
}
var number1 = 4;
var number2 = 33;
var result = add(number1, number2);
console.log(result);

// string
function Add(A1, A2) {
    console.log(typeof A1); //typeof
    return A1 + A2;
}
var Number1 = "AMan";
var Number2 = "45";
var Result = Add(Number1, Number2);
console.log(Result);

// working with String, number, Boolean
function ADD(B1, B2, showResult, Phase) {
    if (showResult) {
        console.log(Phase + B1 + B2);
    }
    else {
        return B1 + B2;
    }
}
var input = 12;
var input2 = 45;
var printResult = true;
var resultPharse = "Result is: ";
ADD(input, input2, printResult, resultPharse);
