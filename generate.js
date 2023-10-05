const generatepassword=
(length)=> Array.from({length},()=> 
Math.random().toString(36).charAt(2)).join('')

console.log(generatepassword(10))