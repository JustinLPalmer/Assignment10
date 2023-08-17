//STEP 1

// function reorganize(str) {
//     let string = str.split('')
//     result = string.sort().join('')
//     return result
// }
// console.log(reorganize('webmaster'))

//STEP 2

// function uppercase(string) {
//     let words = string.split(' ')
//     for (let i = 0; i < words.length; i++) {
//     words[i] = ' ' + words[i].charAt(0).toUpperCase() + words[i].slice(1)
//     }
//     return words.join('')
// }
// console.log(uppercase('i used to be a golf ball'))

//STEP 3 COUNT THE NUMBER OF VOWELS

// function vowelCount(string) {
//     let sentence = string.match(/[aeiou]/g)
//     result = sentence.length
//     return result
// }
// console.log(vowelCount("The Quick Brown Fox"))

//STEP 4 GENERATE STRING OF RANDOM CHARACTERS

// function idGenerator(n) {
//     let options = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let id = ""
//     for (let i = 0; i < n; i++) {
//         id += options[Math.floor(Math.random() * options.length)]
//     }
//     return id
// }
// console.log(idGenerator(8));

//STEP 5 ACCEPTS LIST RETURNS LONGEST WORD
// function Longest_Country_Name(country_name)
//   {
//   return country_name.reduce(function(lname, country) 
//   {
//     return lname.length > country.length ? lname : country;
//   }, 
// "");
// }
// console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
