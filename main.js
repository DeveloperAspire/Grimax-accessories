const mobileMenu= document.querySelector("#mobile-nav");
const hamburgerMenu= document.querySelector("#mobile-icon");
const cancelBtn= document.querySelector("#cancel")


hamburgerMenu.addEventListener("click" ,() => {
  mobileMenu.classList.add("mobile-nav-in")
  mobileMenu.classList.remove("mobile-nav-out")
});

cancelBtn.addEventListener("click" ,() => {
  mobileMenu.classList.add("mobile-nav-out")
  mobileMenu.classList.remove("mobile-nav-in")

});