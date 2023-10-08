// function addHelloToReviewPage() {
//     // Find the element with the class "reviewpage"
//     var reviewPageElement = document.querySelector(".reviewpage");

//     // Check if the element exists
//     if (reviewPageElement) {
//         // Add "Hello" as inner HTML to the element
//         reviewPageElement.innerHTML = "Hello";
//     } else {
//         console.error("Element with class 'reviewpage' not found.");
//     }
// }l
const btn=document.querySelector("#submit")
const greeting=document.querySelector(".reviewpage");
btn.addEventListener('click',()=>{
    if(greeting){
    greeting.innerHTML=`<h1>Thank you for your Review</h1>
    <a href="index.html" id="home"><button id="home-btn">HOME</button></a>
    `
    }
});