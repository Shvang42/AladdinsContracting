const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});



//Menu DropDown
function mFunction(){
  var x=document.getElementById("menuList");

  if(x.style.display==="block")
  {
      x.style.display="none";
  }
  else{
      x.style.display="block";
  }
}