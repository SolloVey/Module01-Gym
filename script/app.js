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

// OPEN-CLOSE POPUP

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen (curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup_content'))  {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}
function popupClose (popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyLock();
      }
   }
}

function bodyLock () {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

if (lockPadding.length > 0) {
   for (let index = 0; index < lockPadding.length; index++) {
      const el = lockPadding[index];
      el.paddingRight = lockPaddingValue;
   }
}
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnlock () {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.add('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});




















