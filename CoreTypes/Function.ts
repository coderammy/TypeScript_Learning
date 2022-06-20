// function Return Types & void

function adhd(n1: number, n2: number) {
  return n1 + n2;
}

function PrintResult(num: number): void {
  console.log("Result: " + num);
}

function AddAnd(n1: number, n2: number, cb: (numm: number) => void) {
  //function types and callbackes
  const result = n1 + n2;
  cb(result);
}

PrintResult(adhd(5, 12));

// function as type

// let combinevalue :(a:number,b:number)=>number;
let combinevalue: (a: number, b: number) => number;

combinevalue = adhd;

// combinevalue = PrintResult //wrong

// console.log(combinevalue(2,3))

// Function Types & Callbacks

AddAnd(10, 10, (result) => {
  console.log(result);
});

//unknown type

let userInput: unknown;
let username: string;

userInput = 69;
userInput = "max";

// Never (that dont return anything)

function generate(msg: string, code: number):never {
  throw { msg: msg, errorcode: code };
}
generate("an error", 5000);
