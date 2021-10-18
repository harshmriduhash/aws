// Variables
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const slideMenu = document.querySelector(".slide-menu");
const slideMenuOverlay = document.querySelector(".slide-menu-overlay");
const menuLink = document.querySelectorAll(".menu-link");


// ********** Mobile Menu **********
openMenuBtn.addEventListener("click", function () {
  slideMenu.classList.remove("translate-x-full");
  slideMenuOverlay.classList.remove("hidden");
  openMenuBtn.classList.add("opacity-0");
});

closeMenuBtn.addEventListener("click", function () {
  slideMenu.classList.add("translate-x-full");
  slideMenuOverlay.classList.add("hidden");
  openMenuBtn.classList.remove("opacity-0");
});

slideMenuOverlay.addEventListener("click", function () {
  slideMenu.classList.add("translate-x-full");
  slideMenuOverlay.classList.add("hidden");
  openMenuBtn.classList.remove("opacity-0");
});

// ********** Mobile Menu Links Animation **********
openMenuBtn.addEventListener("click", function () {
  for (let i = 0; i < menuLink.length; i++) {
    const element = menuLink[i];
    element.classList.remove("translate-x-full", "opacity-0");
    element.classList.add("translate-x-0", "opacity-1");
  }
});

closeMenuBtn.addEventListener("click", function () {
  for (let i = 0; i < menuLink.length; i++) {
    const element = menuLink[i];
    element.classList.remove("translate-x-0", "opacity-1");
    element.classList.add("translate-x-full", "opacity-0");
  }
});

// ********** Auto Date (Footer) **********
let date = new Date();
let year = date.getFullYear();
let autoYear = document.getElementById("auto-year");

autoYear.innerText = year;


// ********** Cookies **********
const cookies = document.querySelector('#cookies');
const cookiesBtn = document.querySelector('#cookies-btn');

//Get cookies
const getCookies = Cookies.get('accepted-cookies')

//Check if the cookie is stored
if (!getCookies) {
  //Show cookies pop up after 5 secs
  setTimeout(() => {
    cookies.classList.remove('hidden')
  }, 3000);
}

//Hide cookies pop up
function hideCookies() {
  cookies.classList.add('hidden')
}

//Accept cookies when clicked
cookiesBtn.addEventListener('click', function () {
  //Set Cookies
  Cookies.set('accepted-cookies', true, {
    expires: 30
  })
})