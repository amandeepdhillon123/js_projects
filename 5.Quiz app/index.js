const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];
  let index=0;
  let total = quizData.length;
  let right=0, wrong=0;
  
  let queBox=document.querySelector("#questionBox")
  let optionInput=document.querySelectorAll('input[type="radio"]')
  
 const loadQuestion =()=>{
               reset();
               if(total === index)
               {
                 return endQuiz();
               }
               

    const Data = quizData[index]
    // console.log(Data) 
    queBox.innerText =`${index+1} ) ${Data.question}`;
    
   optionInput[0].nextElementSibling.innerText=Data.a;
   optionInput[1].nextElementSibling.innerText=Data.b;
   optionInput[2].nextElementSibling.innerText=Data.c;
   optionInput[3].nextElementSibling.innerText=Data.d;
 }
 const submitQuiz= () =>{
    const Data = quizData[index]
    const ans = getAns()
    if(ans === Data.correct)
    {
        right++;
        
    }
    else{
        wrong++;
    }
    index++;  // for next quetion
    loadQuestion(); // reload 
 }

 const getAns = () =>{
    let ans;
     optionInput.forEach((input) =>{
         if(input.checked){
          ans = input.value;
         
        // console.log(input.value)
         }
        
     })
     return ans;
 }

const reset= () =>{
     optionInput.forEach((input) =>{
         input.checked=false;
     })
}


const endQuiz=()=>{

    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML=`
        <h3>Thanks for playing quiz</h3>
        <h2> ${right} / ${total} are correct </h2>
       `

 
}

 loadQuestion(index)


