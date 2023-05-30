import './libs/swiper-bundle.min.scss';
import './style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';

document.addEventListener("DOMContentLoaded", function(event) {

    let swiper = new Swiper(".writer__slider", {
        modules: [Navigation, Pagination],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        
        breakpoints: {  
          992: {
            slidesPerView: 1.6,
            spaceBetween: 40,},
          0: {
            slidesPerView: 1,
            spaceBetween: 40, },
        },
        
        loop: true,
        // slidesPerView: 1.6,
        // spaceBetween: 40,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

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
        titleColor();
    });


  function titleColor(){
    let colorChange = document.querySelectorAll(".main-page__title-js");
    colorChange.forEach(event => {
        event.style.color="orange";
    })

    let currentWidth = window.innerWidth;
    setTimeout(function () {
        if (currentWidth === window.innerWidth ) {
            if (window.innerWidth <= 767) {
                colorChange.forEach(event => {
                    event.style.color="red";
                })

            } else {
                colorChange.forEach(event => {
                    event.style.color="black";
                })
            }
        }
    }, 1000)

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


    const anchors = document.querySelectorAll('.header__link-item')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            burger.classList.remove('open');
            topNav.classList.remove('open');

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })


        })
    }


 const toggleButtons = document.querySelectorAll('.question');
    toggleButtons.forEach(e => {
        e.addEventListener('click', function () {
            this.classList.toggle('open');
        });
    })

});