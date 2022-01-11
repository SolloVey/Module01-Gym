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

function validateEmail (email) {
   let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

form.onsubmit = function () {
   let emailVal = inputEmail.value;
   let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

   formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            console.log('inputs not filed');
        } else {
            input.classList.remove('error');
        }
    });

   if (emptyInputs.length !== 0) {
      console.log('inputs not filed');
      return false;
   }

   if (!validateEmail(emailVal)) {
      console.log('email not valid');
      inputEmail.classList.add('error');
      return false;
   } else {
      inputEmail.classList.remove('error');
   }
 
   if (!inputCheckbox.checked) {
      console.log('checkbox not checked');
      inputCheckbox.classList.add('error-checkbox');
      return false;
   } else {
      inputCheckbox.classList.remove('error-checkbox');
   }
};

// МОДАЛЬНОЕ ОКНО

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}

















