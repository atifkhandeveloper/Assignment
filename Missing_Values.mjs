import PromptSync from "prompt-sync";
import randomInteger from "random-int";

//Find missing values in array and its occurance
function Missing_values(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var start = parseInt(arr[0]);
  var end = parseInt(arr.slice(-1));
  var index_value = 1;
  for (var i = start + 1; i <= end; i++) {
    if (arr.indexOf(i) == -1) {
      console.log("Value", i, "is missing in the array at index", index_value);
      index_value += 1;
    } else {
      index_value += 1;
    }
  }
}
export { Missing_values };

//Creating Quiz
function Quiz() {
  const prompt = PromptSync();
  let score = 0;
  let Questions = [
    "Which one is Fruit? 1- Apple      2- Tomato     3- Potato",
    " Whats the capital of Australia?  1- Sydney    2- Perth    3- Canberra",
    " Whats the Birth Place of Sunny Leone? 1- India        2- Canada       3- America",
  ];
  let Answers = [1, 3, 2];
  let User_Answers = [];

  for (let index = 0; index < Questions.length; index++) {
    User_Answers[index] = prompt(Questions[index]);
    if (User_Answers[index] == Answers[index]) {
      score += 5;
    }
  }

  if (score >= 10) {
    console.log(
      "Congrations, you Passed. You scored a total of",
      score,
      "out of 15"
    );
  } else {
    console.log("Sorry, You Failed. You scored a total of", score, "out of 15");
  }
}

export { Quiz };
