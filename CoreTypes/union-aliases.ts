// union Types

function combine(n1: number | string, n2: number | string) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combineNumber = combine(45, "aman");
console.log(combineNumber);

// Literal Types

function newCom(
  n1: number | string,
  n2: number | string,
  resultConversion: string
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "sd-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const newCom1 = newCom("30", "26", "sd-numbe");
console.log(newCom1);

// Type Aliases Custom Type

type Figure = number | string;
type conversion = "as number" | "as string ";

function calling(n1: Figure, n2: conversion) {
  return n1 + n2;
} 

console.log("45","s")