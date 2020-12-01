

const navbtn = document.querySelector('.navBtn');
const navMenu = document.querySelector('.dropNav');
const nav =  document.querySelector('nav');
const navLinks = document.querySelectorAll('a')
const mainImg = document.querySelector('.mainImg');
const loader = document.querySelector('.openingdiv');
const full = document.querySelector('.full');


function myFunction(x) {
    x.classList.toggle("change");
   
  }
  
  
   navbtn.addEventListener('click', ()=>{
        navMenu.classList.toggle("d-none")
    })
  
  
    window.addEventListener('scroll', (e)=>{
          windowPos = window.scrollY;
       
      if( windowPos >= 10){
          nav.classList.add("moved")
      } else{
          nav.classList.remove("moved")
      }
    })
  

//             var docHeight = document.documentElement.offsetHeight;
// function findOverFlow(){
//             [].forEach.call(
//               document.querySelectorAll('*'),
//               function(el) {
//                   console.log(el.offsetHeight)
//                 if (el.offsetHeight > docHeight) {
//                   console.log(el);
                 
//                 }
//               }
//             );
//  console.log(docHeight)
//             }

function hideLoader(){
    setTimeout(()=>{
        loader.classList.add("d-none")
        full.classList.remove("d-none")
    }, 5000)
}


function showHome(){
    setTimeout(()=>{
      
        full.classList.remove("d-none")
    }, 7000)
}




  
// for(let i = 0; i < roll.length; i++){ 
//         console.log(roll[i]);
//     }

//  const delayedPicChange = (func, delay) =>{
//      return new Promise((resolve, reject)=>{
//          setTimeout(()=>{
//             for(let pic of roll){
//                 mainImg.src = pic;
//             }
//             resolve();
//          },delay)
//      })
//  }

//  delayedPicChange( () => {for(let i= 0; i< roll.length; i++){
//     mainImg.src = roll[i];
// }}   ,4000)
//  delayedPicChange(() => {for(let i= 1; i< roll.length; i++){
//     mainImg.src = roll[i];
// }} ,8000)
(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; if(!gi.call(d,id)){ js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()

 hideLoader();
showHome();
