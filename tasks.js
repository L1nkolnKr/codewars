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