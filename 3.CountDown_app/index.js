



const endDate= " 18 April 2024 06:00 PM";

document.querySelector('#end-date').innerText=endDate;

const input =document.querySelectorAll("input")


const clock = () =>{

    let end= new Date(endDate);
    // console.log(end)
     
 let now =new Date();

//  console.log(now)

 let diff= end - now  // millisecond
//  console.log(diff)

 let sec =diff /1000;

//  console.log(sec)

//   days 
let day = (sec/3600/24)
// console.log(day)
input[0].value = Math.floor(day)

let hr= (sec / 3600 ) % 24 ;
// console.log(hr)

let min= (sec / 60 ) % 60 ;
// console.log(min)

let s=  sec % 60
// console.log(s)



input[1].value =Math.floor(hr)

input[2].value =Math.floor(min)

input[3].value =Math.floor(s)




}
// clock()

setInterval(() =>{
    clock();
},100)



