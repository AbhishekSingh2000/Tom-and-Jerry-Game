var readlinesync = require("readline-sync");
var chalk = require('chalk');
var score = 0;
var userName = readlinesync.question("Enter your name? \n ");
console.log(chalk.red("Hello " + userName) + "! Welcome to the Game -" + chalk.black.bold.bgWhite("Tom and Jerry Quiz "));

function check(ques, answer){
  var question= readlinesync.question(ques);
  if (question.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("you are right"));
    score++;
  }
  else{
    console.log(chalk.red("you are wrong"));
  }
  console.log("Your score - "+ score);
  console.log("----------");
};

var questions = [
{
  question: "Tell whether the face of the Mammy two shoes(the aunt in the house) was ever revealed? ",
  answer: "yes"
},

{
  question: "Name the puppy in the show? ",
  answer: "tyke"
},

{
  question: "Name of the dog who used to punish Tom for chasing Jerry and disturbing his puppy named Tyke? ",
  answer: "Spike"
},

{
  question: "Name of smaller grey mice? ",
  answer: "Nibbles"
},

{
  question: "Favourite food of Nibbles? ",
  answer: "Cheese"
},

{
  question: "When was Tom And Jerry created? ",
  answer: "1940"
},

{
  question: "The original name of Tom when the show started in 1940? ",
  answer: "jasper"
},

{
  question: "The original name of Jerry when the show started in 1940? ",
  answer: "jinx" 
}];

console.log(chalk.bgBlue("Level 1 initiated"));
for(var i=0; i<questions.length; i++){
  check(questions[i].question, questions[i].answer)
  if(i==2){console.log(chalk.bgBlue("Level 2 initiated"))}
  else if(i==5){console.log(chalk.bgBlue("Level 3 initiated"))}
  else if(i==7){console.log(chalk.bgBlue("You reached end of the game successfully"))}
};

var score1={
  name: "Abhishek",
  score: "8"
}

var score2={
  name: "Praduman",
  score: "7"
}
console.log(chalk.rgb(255,131,0)("your Final Score is "+ score + "\n"));
if (score>=7){
console.log(chalk.yellow("Congratulations")+", you have beaten the high score, Text abhishek with a screenshot to update your name in high scores. \n")
console.log("Previous high scores are \n" + "1. name : "+ score1.name +"\n   score "+ score1.score + "\n \n" + "2. name : "+ score2.name +"\n   score "+ score2.score )
}
 