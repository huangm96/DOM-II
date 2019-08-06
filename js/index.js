// Your code goes here
// #1
const mouseoverControl_colorChange= document.querySelectorAll('.mouseoverControl');
mouseoverControl_colorChange.forEach(e=>{
    e.addEventListener("mouseover",(e)=>{
         e.target.style.color ="red";
        
    });
    e.addEventListener("mouseout",(e)=>{
        e.target.style.color ="black";
   });
});
// #2
const keydownInput = document.querySelector('input');
const keydown = document.getElementById('showKeydown');
keydownInput.addEventListener('keydown', (e)=>{
    keydown.textContent= ` ${e.code}`;
});
// #3
const countryBox = document.querySelector('.countries');
countryBox.addEventListener("scroll",()=>{});

// #4
const scaleImg = document.querySelectorAll('.smallImg');

scaleImg.forEach((e)=>{
    e.addEventListener("dblclick",()=>{
        e.src="img/cat.jpg";
     });
    
});

//#5

document.addEventListener("dragstart", (e)=> {
    e.dataTransfer.setData("Img", e.target.id);
    
  });
  
   document.addEventListener("dragover", (e)=> {
    e.preventDefault();
  });
  
  document.addEventListener("drop", (e)=> {
    event.preventDefault();
    let data = e.dataTransfer.getData("Img");
    e.target.appendChild(document.getElementById(data));
    
  });

//   #6
// 
document.getElementById("email_space").addEventListener("focus", (e)=>{
    document.getElementById("email_space").style.backgroundColor = "red";

});

