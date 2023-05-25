document.querySelector('#btn').addEventListener('click',getColor)



function getColor(){

    const randomNumber=Math.floor((Math.random() * 16777215)) 
    // console.log(randomNumber)

    const randomCode="#" + randomNumber.toString(16)
    console.log(randomCode)

    document.body.style.backgroundColor=randomCode

    document.querySelector('#color-code').textContent= randomCode

    //    automatic copy  when you click
   
    navigator.clipboard.writeText(randomCode)



}
getColor()