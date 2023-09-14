console.log("Hello World!\n==========\n");
function printOdds(count){

const posCount = Math.abs(count);
const sign = (count/posCount);
for(let i = 1; i <= posCount; i++) {
if (i % 2 == 1) {
    console.log(sign*i);
}
}
}

printOdds(5);
printOdds(-17);
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function checkAge (userName,age) {

    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
   
    if (!userName){
        console.log("Invalid name");
        return;
    }

    if (age >= 16){
        console.log(aboveSixteen);
        
    }  else if (age < 16){
        console.log(belowSixteen);
    }
    else {
      console.log("invalid age");
    }
}
checkAge ("abel", 14);
checkAge ("", 17);
checkAge ("Stan","pizza")


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
//ADDITIONAL WAYS TO DECLARE A FUNCTION
// const cartesian = function (x,y){}
// const cartesian = (x,y) => {}
function cartesian(x,y) {
 if (x == 0 && y != 0) {
    console.log ("y axis");

 } else if (x != 0 && y == 0) {
    console.log ("x axis"); 
 
} else if ( x > 0 && y > 0) {
    console.log("quadrant 1");
    
} else if ( x < 0 && y > 0) {
    console,log ("quadrant 2");  

} else if (x < 0 && y < 0) {
 console.log("quadrant 3")
} else if (x > 0 && y < 0){
console.log ("quadrant 4")
} else console.log ("center")
}

cartesian (0,3)
//Exercise 3 Section


function triangletype (side1 ,side2, side3) {
   
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2) {
    return "invalid triangle";
    } else if (
        side1 == side2 && side1 == side3) {
            return "equilateral";
        } else if ( 
        side1 == side2 && side3 != side1 || side2 == side3 && side1 != side2 || side3 == side1 && side2 != side3
        ){
            return "isosceles triangle";

        } else
        return "scalene triangle";
}
console.log(triangletype (1, 2, 2));
console.log(triangletype (1, 1, 2));
console.log(triangletype (2, 2, 2));
console.log(triangletype (4, 5, 7));
//Exercise 4 Section



//Exercise 5 Section (done together in class)

function dataPlan(planLimit, day, usage){
const daysRemaining = 30 - day;
const dataRemaining = planLimit - usage;
const idealUsageRemaining = (dataRemaining / daysRemaining).toFixed(3);
const perfectAvg = (planLimit / 30).toFixed(3);
const currAvg = (usage / day).toFixed(3);
const projectedTotalUsage = currAvg * 30;
const totalUsageDifference = planLimit -projectedTotalUsage;

//Plug in the variables into the paragraph
let output = `${day} days used, 15 ${daysRemaining} days remainging\n Average daily use ${perfectAvg} GB/day\n`;

if (usage >= planLimit) {
    output += `You've used all of your allotted data for the month. You will be charged $700/GB of extra data used. Please keep using data, we enjoy taking your money\n If you keep up this pace, you will owe $${projectedTotalUsage * 700} by the end of the month`
}

if (totalUsageDifference > 0){
output += `You are UNDER your average daily use (${currAvg} GB/day);
continuning this low usage, you'll have ${totalUsageDifference} GB of data unused.To maximize your remaining data, use ${idealUsageRemaining} GB/day`
} else if (totalUsageDifference < 0) {
output = 
`You are EXCEEDING your average daily use (${currAvg} GB / day);
continuing this high usage, you'll exceed your data plan by
${-totalUsageDifference} GB.To stay below your data plan, use no more than ${idealUsageRemaining} GB/day.`
}

return output;
}

console.log(dataPlan(100, 15, 45));
console.log(dataPlan(100, 15, 55));
console.log(dataPlan(100, 15, 105));
