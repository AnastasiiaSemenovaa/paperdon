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
        changeLoginBtn()
    });

});