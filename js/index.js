// Your code goes here

const mouseoverControl_colorChange= document.querySelectorAll('.mouseoverControl');
mouseoverControl_colorChange.forEach(e=>{
    e.addEventListener("mouseover",(e)=>{
         e.target.style.color ="red";
        
    });
    e.addEventListener("mouseout",(e)=>{
        e.target.style.color ="black";
   });
});

const keydownInput = document.querySelector('input');
const keydown = document.getElementById('showKeydown');
keydownInput.addEventListener('keydown', (e)=>{
    keydown.textContent= ` ${e.code}`;
});

const countryBox = document.querySelector('.countries');
countryBox.onscroll;


const scaleImg = document.querySelectorAll('.smallImg');

scaleImg.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        e.src="img/cat.jpg";
        
    });
    
    
});


