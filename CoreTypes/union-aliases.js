// union Types
function combine(n1, n2) {
    var result;
    if (typeof n1 === "number" && typeof n2 === "number") {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combineNumber = combine(45, "aman");
console.log(combineNumber);
// Literal Types
function newCom(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "sd-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var newCom1 = newCom("30", "26", "sd-numbe");
console.log(newCom1);
function calling(n1, n2) {
    return n1 + n2;
}
console.log("45", "s");
