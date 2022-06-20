//Using TYpes Number , string And Boolean 
// Number
// typeof functionality

// In TypeScript, you work with types like string or number all the times.

// Important: It is string and number (etc.), NOT String, Number etc.

// The core primitive types in TypeScript are all lowercase!

//Number

function add(n1: number, n2: number) {
  // if(typeof n1 ! =='number' || typeof n2! =='number'){
  //     throw new Error ('in correct input')
  // }
  // Key difference is : javascript uses "dynamic types (resolve at runtime),typescript uses "static types"(set during development).

  return n1 + n2;
}

const number1 = 4;
const number2 = 33;

const result = add(number1, number2);
console.log(result);

// string

function Add(A1: string, A2: string) {
  console.log(typeof A1); //typeof
  return A1 + A2;
}
const Number1 = "AMan";
const Number2 = "45";

const Result = Add(Number1, Number2);
console.log(Result);

// working with String, number, Boolean

function ADD(B1: number, B2: number, showResult: boolean, Phase: string) {
  if (showResult) {
    console.log(Phase + B1 + B2);
  } else {
    return B1 + B2;
  }
}

const input = 12;
const input2 = 45;
const printResult = true;
const resultPharse = "Result is: ";

ADD(input,input2,printResult,resultPharse);
