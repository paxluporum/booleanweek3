// -----------------------------------------------
// Boolean Challenges (Very Simple) with Instructions & Solutions
// -----------------------------------------------

// Challenge 1: Simple Boolean
// Create a variable called isRaining and set it to false.
// Log it to the console.

let isRaining = false

console.log(isRaining);


// -----------------------------------------------

// Challenge 2: Negate the Boolean
// Create a variable called lightOn and set it to true.
// Log the opposite of lightOn using !.


let lightOn = true

console.log(!lightOn); //false



// -----------------------------------------------

// Challenge 3: AND Operator
// Create two variables: hasID = true, hasTicket = false.
// Create a variable canEnter that is true only if both hasID AND hasTicket are true.
// Log canEnter.

let hasID = true;
let hasTicket = false;
let canEnter = hasID && hasTicket;
console.log(canEnter);





// -----------------------------------------------

// Challenge 4: OR Operator
// Create two variables: hasKey = false, knowsPassword = true.
// Create a variable canOpen that is true if either hasKey OR knowsPassword is true.
// Log canOpen.

let hasKey = false;
let knowsPassword = true;
let canOpen = hasKey || knowsPassword;
console.log(canOpen);



// -----------------------------------------------

// Challenge 5: Combine Operators
// Create two variables: isWeekend = false, isHoliday = true.
// Create a variable canRelax that is true if it is NOT a weekend OR it is a holiday.
// Log canRelax.

let isWeekend = false;
let isHoliday = true;
let canRelax = !isWeekend || isHoliday;
console.log(canRelax);


