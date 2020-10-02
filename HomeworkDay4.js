/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

const area = (l1,l2) => {
    let result = l1 * l2
    return result
}
console.log(area(25,30))


/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (a, b) =>{
    let result
    
    if(a === b){
        result = (a + b) * 3
    } else{
        result = a + b
    }
    return result

}

console.log(crazySum(10, 10))

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

const crazyDiff = (x) =>{
    let result
    result = x - 19
    if(x > 19){
        result = result * 3
    }else{
        result = result
    }
    return result
}

console.log(crazyDiff(20))
/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = (N) =>{

    if(N >= 20 && N <= 100 || N === 400){
        return true
    } else {
        return false
    }
}
console.log(boundary(10))

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = (x) =>{
let S = "Strive " + x
let result
if(x.startsWith("Strive")){
    result = x  
}else {
    result = S
}
return result
}

console.log(strivify("Hello There!"))
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (x) => {
    let result
    if(x % 3 === 0){
        result = "The number is a multiple of 3"
    } else if(x % 7 === 0){
        result = "The number is a multiple of 7"
    } else {
        result = "The Number is neither a multiple of 3 or 7"
    }
    return result
}
console.log(check3and7(8))

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

const reverseString = (x) => {

    let arrayOfString = x.split("")
    let reverseArray = arrayOfString.reverse()
    let joinedArray = reverseArray.join("")
    return joinedArray
}
console.log(reverseString("Hello"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

const upperFirst = (x) => {
    let splitString = x.toLowerCase().split(" ")

    for(let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
    }
    return splitString.join(" ")

}
console.log(upperFirst("hello there"))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = (x) => {
    result = x.slice(1, -1)
    return result

}
console.log(cutString("Hello"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

const giveMeRandom = function (n) {
    let arrayofNumbers = []

    for(let i = 0; i < n; i++) {
        let randomNumbers = Math.floor(Math.random()*10) + 1
        arrayofNumbers.push(randomNumbers)
    }

    return arrayofNumbers

}
console.log(giveMeRandom(7))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
