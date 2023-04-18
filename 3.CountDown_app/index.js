



const endDate= " 18 April 2024 06:00 PM";

document.querySelector('#end-date').innerText=endDate;

const input =document.querySelectorAll("input")


const clock = () =>{

    let end= new Date(endDate);
     
 let now =new Date();

 let diff= end - now  // millisecond

 let sec =diff /1000;

//   days 
let day = (sec/3600/24)
input[0].value = Math.floor(day)

let hr= (sec / 3600 ) % 24 ;

let min= (sec / 60 ) % 60 ;

let s=  sec % 60



input[1].value =Math.floor(hr)

input[2].value =Math.floor(min)

input[3].value =Math.floor(s)




}

setInterval(() =>{
    clock();
},100)



