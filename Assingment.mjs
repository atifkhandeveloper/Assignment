import { Missing_values } from "./Missing_Values.mjs";
import PromptSync from "prompt-sync";
import { Quiz } from "./Missing_Values.mjs";
const prompt = PromptSync();

//Taking Input from user using Prompt
let name = prompt("What is your Name");
console.log("Hello", name, "Welcome to First Assingment");

// // Finding Missing values and indexes in an array
var test_array = [11, 15, 17, 18, 19];
Missing_values(test_array);

// // Quiz Question
Quiz();

//Create own Prototype Method

Array.prototype.GetTypes = function () {
  console.log(this);
  let Total_Types = [];
  let length = this.length;
  for (let index = 0; index < length; index++) {
    let type = typeof this[index];
    if (Total_Types.indexOf(type) == -1) {
      Total_Types.push(type);
    }
  }
  return Total_Types;
};
var Checking_Array = ["Gandu Khan", 2, 5, 7, true];
console.log(Checking_Array.GetTypes());
