//Multi Line Task++: Hello World

//You need to write a function f that returns the string Hello, world!.
//Requirement: Every line must have at most 2 characters, and total number of lines must be less than 40.
//Hint: It's possible to complete this in 28 lines only.

c=
`\
c\
o\
n\
s\
t\
r\
u\
c\
t\
o\
r`
c[
c]
[c
](
`f
=(
)\
=>
'\
H\
e\
l\
l\
o\
,\
 \
w\
o\
r\
l\
d\
!\
'`
)(
)

//Get the mean of an array

//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

function getAverage(marks){
    return Math.floor(marks.reduce((acc, cur) => acc + cur)/ marks.length)
    }


//sPoNgEbOb MeMe

//Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?
//You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

function spongeMeme(str) {
    let res ='';
    for(let i = 0; i<str.length; i++){
    res += (i % 2) ? str[i].toLowerCase() : str[i].toUpperCase();
        }
        return res;
    
    }



//Write shortest function to calculate Average number of Array

//Given an array of integers, calculate the Average of these numbers.

//Main challenge is to write shortest and compact function for it.

//For example: var a = [0, 1, 2];
//avg(a) // output should be 1

//Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

const  avg = a => a.reduce((a,b)=>a+b)/a.length