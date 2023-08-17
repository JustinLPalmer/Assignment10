const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
//STEP 1

// const date = prompt(`Enter date in mm/yyyy format (ex: 10/2021)`)
// let month = date.slice(0,2)
// let year = date.slice(-4)
// numberOfDays = new Date(year, month, 0).getDate()
// console.log(`${months[parseInt(month)-1]} has ${numberOfDays} days.`)

//STEP 2

// let date = prompt("Enter the date in mm/dd/yyyy format. ex: 01/21/2021")
// let month = date.slice(0, 2)
// if (month >= 0 && month <= 11) {
//   console.log(`This date is in ${months[parseInt(month)-1]}`)
//     } else {
//     console.log(`You've entered an invalid date format.`)
//   }

//STEP 3

// let date = prompt("Enter the date in yyyy-mm-dd format (ex: 2021-01-28)")
// date += 'T00:00'
// let day = new Date(date).getDay()
// if (day === 0 || day === 6) {
//   console.log(`That day is a weekend!`)
// } else if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
//     console.log(`That day is a weekday.`)
// } else {
//     alert('You have entered an invalid date format')
// }

//STEP 4

// let day = new Date()
// let yesterday = new Date(day).getDay()-1
// console.log(`Yesterday was a ${days[yesterday]}`)

//STEP 5

// let day = new Date().getDay()
// console.log(`Today is "${days[day].slice(0,1)}"`)
