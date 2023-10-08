const questions=[
    {
     question:"which is a temporary storage memory ?",
     options:["ram","rom","hard disk"],
     answer:0,
   },
   {
     question:"what is the full form of js?",
     options:["java script","java style","java store"],
     answer:0,
   },
   {
     question:"which is the brain of computer?",
     options:["monitor","cpu","mouse"],
     answer:1,
   },
   ];
  const quiz=document.querySelector("#quiz");
   const ansElement=document.querySelectorAll(".answer");
 const [queElement,option1,option2,option3]=document.querySelectorAll("#question",".option1","option2",".option3");
   const submitbtn=document.querySelector("#submit");
    let curquestion=0;
   let score=0;
   const displayquestion=() =>{
     //curquestion++;
     const {question,options}=questions[curquestion];
     queElement.innerText=`${curquestion+1}:${question}`;
     options.forEach(
       (curOption,index)=>(window[`option${index+1}`].innerText=curOption)
       );
//    console.log(question);
   };
   displayquestion();
  const getSelectedOption =()=>{
     let ansindex;
     ansElement.forEach((curOption,index)=>{
   
      if(curOption.checked){
         ansindex=index;
     }
    //  console.log(ansindex);
   });
   return ansindex;
   //let answerElement=Array.from(ansElement);
  //return  answerElement.findIndex((curElem,index)=>curElem.checked);
   };
   const deselectedAnswers=()=>{
     ansElement.forEach((curElem)=>curElem.checked=false)
   }
 submitbtn.addEventListener('click',()=>{
  const selectedoptionIndex=getSelectedOption();
  if(selectedoptionIndex===questions[curquestion].answer){
    score++;
  }
  curquestion++;
   if(curquestion<questions.length){
     deselectedAnswers();
    displayquestion();
   } else{
     //const addhtml=document.querySelectorAll(".quize-section");
     quiz.innerHTML=
     `<div class="result">
     <h3>your score is ${score}/${questions.length}</h3>
     <button class="reload-button" onclick="location.reload()">play again</button>
     <a href="index.html" id="home"><button id="home-btn">HOME</button></a>
     <a href="review.html" id="review"><button id="review-btn">REVIEW</button></a>
     </div>
     ` ;
     
   }
 });
