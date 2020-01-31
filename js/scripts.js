// Global Variables
let entry;
let average;
let score1;
let score2;
let score3;
let total = 0;

// Get 3 scores from the user and ad them together

entry = window.prompt("Enter Test score 1");
score1 = parseInt(entry);

total += score1;

//Enter score 2

entry = window.prompt("Enter Test score 2");
score2 = parseInt(entry);

total += score2;

//Enter score 3

entry = window.prompt("Enter Test score 3");
score3 = parseInt(entry);

total += score3;

// Calculate the average

average = parseInt(total / 3);

// Display the results

document.write("The first score was: " + String(score1) + "<br>");
document.write("The second score was: " + String(score2) + "<br>");
document.write("The third score was: " + String(score3) + "<br>");

document.write("The average of the 3 scores was: " + String(average) + "<br>");






window.console.log(average);