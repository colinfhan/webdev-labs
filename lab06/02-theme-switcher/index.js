/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
document.querySelector('#default').addEventListener('click', ()=>{
   document.querySelector('body').className=''
})

document.querySelector('#ocean').addEventListener('click', ()=>{
   document.querySelector('body').className='ocean'
})

document.querySelector('#desert').addEventListener('click', ()=>{
   document.querySelector('body').className='desert'
})

document.querySelector('#high-contrast').addEventListener('click', ()=>{
   document.querySelector('body').className='high-contrast'
})