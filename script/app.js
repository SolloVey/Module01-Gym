// ПЛАВНЫЙ СКРОЛЛ ПО ССЫЛКЕ

const links = document.querySelectorAll(".trans");

    for (const link of links) {
       link.addEventListener("click", clickHandler);
       }

function clickHandler(e) {
    e.preventDefault();
const href = this.getAttribute("href");

document.querySelector(href).scrollIntoView({
   behavior: "smooth"
    });
}

// ВАЛИДАЦИЯ

let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let inputEmail = document.querySelector('.js-mail');
let inputCheckbox = document.querySelector('.js-checkbox');

form.onsubmit = function () {
   let emailVal = inputEmail.value;

   formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');

        } else {
            input.classList.remove('error');
        }
    });



   return false;
}
