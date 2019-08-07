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

const emailSpace = document.getElementById("email_space");
emailSpace.addEventListener("focus", (e)=>{
    document.getElementById("email_space").style.backgroundColor = "red";

});

// #7
window.addEventListener('scroll', (e)=> {
    if (document.documentElement.scrollTop > 50) {
        document.querySelector('header').style.background="lightblue";
    }else{
        document.querySelector('header').style.background="white";
    };
});

//#8
let clickNum =0;
window.addEventListener('click', (e)=> {
    clickNum += 1;
    console.log(`You clicked ${clickNum} times`);
});

// #9
const navList = document.querySelector("nav");
navList.addEventListener('click', (e)=> {
    e.target.style.color = "orange";
});

// #10 
const HeadbusImg = document.querySelector('#fun-bus');

    HeadbusImg.addEventListener('mouseover', (e) => {
    TweenMax.to(e.target, 1, {
      scale: 1.3,
      filter: 'none',
      ease: Elastic.easeOut.config( 1, 0.75)
    })
})  
    HeadbusImg.addEventListener('mouseleave', (e) => {
    TweenMax.to(e.target, 0.5, {
      scale: 1,
      filter: 'none',
      ease: Power1.easeIn
    })
  })

  // #11
  const letsgo =document.querySelector('#smallbus');
  TweenLite.to(letsgo, 1, {
    ease: Back.easeIn.config(1.7),
    y: -500
  });