import './style.scss';

document.addEventListener("DOMContentLoaded", function(event) {

    let burger = document.querySelector('.burger');
    let topNav = document.querySelector('.header__nav');

    if (burger && topNav) {
        burger.addEventListener('click', function () {

            this.classList.toggle('open');
            topNav.classList.toggle('open');

        });
    }


    function changeLoginBtn() {
        let loginBtn = document.querySelector('.header__log-link');
        if (loginBtn) {
            if (window.innerWidth <= 767) {
                loginBtn.innerHTML = 'Log in';
            } else {
                loginBtn.innerHTML = 'Log in / Sign up';
            }
        }
    }


 
    changeLoginBtn();
    window.addEventListener('resize', function () {
        changeLoginBtn();
        changeHireBtn();
    });


 let colorChange = document.getElementById("redColor");
  function titleColor(){
     if (window.innerWidth <= 767) {
      colorChange.style.color="red";
    } else {
      window.addEventListener('resize', function () {
        colorChange.style.color="red";
    });
      }
  }
  

  titleColor();
  
  function changeHireBtn() {
  let hireBtn = document.querySelector(".header__hire-btn");
  if (hireBtn) {
    if (window.innerWidth<= 767) {
      hireBtn.innerHTML="Hire";
    }
    else {
      hireBtn.innerHTML="Hire expert";
    }
  }
  }
  changeHireBtn();
});