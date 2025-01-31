function header(title){
    console.log("--------", title, "--------")

}
header("Create variables of different data types and print them.")
let score=100;
let temperature = 36.6;
let greeting= "Hello, JavaScript!";
let isLearningFun = true; 

console.log(score);
console.log(temperature);
console.log(greeting);
console.log(isLearningFun);

header( "Create an object and an array, then access and modify their elements.")
let student = {
    name: 'Bingsong Yu',
    age: 22,
    subject: ['CMPSC263','CMPSC464','STAT464','CMPEN362'],
    isGraduated: false
};

let primeNumbers = [2,3,5,7,11];

primeNumbers[1] = 4;
console.log(primeNumbers[1]);
console.log("Mistake Detected");
primeNumbers[1] = 3;
console.log(primeNumbers)

header("Perform operations using different operators and understand their results.")
let x = 2025;
let y = 22;
console.log("Sum is",sum=x+y,"| Product is", product=x*y,"| Modulo is", modulo=x%y);
console.log("Comparison using loose equality operator ->",isLooseEqual=x==y)
console.log("Comparison using strict equal operator->",isStrictEqual=x===y)
console.log("Logical comparison ->",isLooseEqual&&isStrictEqual)

header("Write conditional statements and loops using control flow operators.")
if(score>50){
    console.log("Great job!");
}else{
    console.log("Keep trying!");
}

for(i=0;i<primeNumbers.length;i++){
    console.log(primeNumbers[i]);
}
let flag=true;
while(flag==true){
    console.log(score);
    if(score<=0){
        flag=false
    }
    score--;
}

header("Understand JS functions")
function eventCountdown(eventDate) {
    const now = new Date();//initialize varaible now to current date
    const event = new Date(eventDate);//initialize targeted date as varaible event
    const timeDiff = event - now;//calculate the difference from current date to target date
  
    let seconds = Math.floor(timeDiff / 1000);//calcualte the total seconds remaining from timediff, round down.
    let minutes = Math.floor(seconds / 60);//calcualte the total minutes remaining from timediff, round down.
    let hours = Math.floor(minutes / 60);//calcualte the total hours remaining from timediff, round down.
    let days = Math.floor(hours / 24);//calcualte the total days remaining from timediff, round down.
  
    hours %= 24;//convert to convertion human readible
    minutes %= 60;//convert convention human readible
    seconds %= 60;//convert convention human readible
  
    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;//returns the difference of targeted time to event time in human readable format
  }
  
  const countdownMessage = eventCountdown('December 31, 2024 23:59:59');//call the function eventCountdown with setting the parameter eventDate 2025.
  console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024
//The code snippet works by calling a helper function eventCountdown to handle the calcualtion externally by passing a target date to eventCountdown. 
//In eventCountdown, we are given a target date, then we initalize now for current date, initalize event for the given eventDate from parameter, and 
//calculate the timeDiff between now and event. Then, we use the timeDiff to calculate total of seconds, minutes, hours, and days. Then, we print out 
//the timeDiff to human readible countdown in days, hours, and minutes. Finally, return the formatted string.
//We print the countdown to console.

function swapFunctiona(a=1,b=2,c=3){
    let q = a
    let w = b
    let e = c
    a = w
    b = e
    c = q
}

header("Find longest word.")
function findLongestWord(sentence) {
    const words = sentence.split(' '); // words is an array of all the words in the sentence
    // write your code here
    index = 0
    longest = 0
    for (word= 0; word<words.length; word++){
        words[word] = words[word].replace(/[^\w\s]/g, "")
        if(words[word].length>longest){
            index = word
            longest = words[word].length
        }
    }
    return words[index]
  }
  
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
console.log(findLongestWord("All it takes is one bad day to reduce the sanest man alive to lunacy. That's how far the world is from where I am. Just one bad day."))
console.log(findLongestWord(" I Went Crazy! And I'm smart enough to admit it! Why Can't You?"))
