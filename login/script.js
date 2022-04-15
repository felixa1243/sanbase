const intro=document.getElementById('intro')
h3=document.querySelector('.row .column h3')
h3.innerHTML="Login"
h3.classList.add('button')
h3.addEventListener('click',()=>{
  h3.classList.add('button-click')
})
const nonmember=document.querySelector('.row:nth-child(2)')
const form=document.querySelector('.d-none')
form.style.transitionDelay='1s'
intro.addEventListener("click",()=>{
  intro.classList.add('t-rotate')
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
form.querySelector('button').onclick=()=>{
  form.querySelector('button').style.background="#929292"
}
/*
$("#intro").click(function(){
$("form").animate({
  oppacity:"show"
},{
  easing:"easein"
})
})
$(".row:nth-child(1) .column h3").html("Login")
$(".row:nth-child(1) .column h3").click(function(){
  $("form").animate({
    oppacity:"show"
  },{easing:"easein"},900)
  $(".row:nth-child(1) .column h3").hide()
})*/