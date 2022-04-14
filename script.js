const intro=document.getElementById('intro')
h3=document.querySelector('.row .column h3')
setTimeout(()=>{
 h3.innerHTML="Get started!"
 h3.style.textDecoration="underline"
},300)
const nonmember=document.querySelector('.row:nth-child(2)')
const form=document.querySelector('.d-none')
form.style.transitionDelay='1s'
intro.addEventListener("click",()=>{
  intro.classList.add('t-rotate')
  intro.style.transition='1s'
  intro.style.maxWidth='50%'
  intro.parentNode.removeChild(h3)
  setTimeout(function() {
  form.classList.remove('d-none')
  form.classList.add('d-flex')
  form.classList.add('f-col')
  nonmember.classList.remove('d-none')
  }, 1500);
} )
h3.addEventListener("click",()=>{
  intro.classList.add('t-rotate')
  intro.style.transition='1s'
  intro.style.maxWidth='50%'
  intro.parentNode.removeChild(h3)
  setTimeout(function() {
  form.classList.remove('d-none')
  form.classList.add('d-flex')
  form.classList.add('f-col')
  nonmember.classList.remove('d-none')
  }, 1500);
} )