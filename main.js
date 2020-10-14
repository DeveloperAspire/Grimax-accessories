const mobileMenu= document.querySelector("#mobile-nav");

const hamburgerMenu= document.querySelector("#mobile-icon");

const cancelBtn= document.querySelector("#cancel");

const nameInput= document.querySelector("#name");

const emailInput= document.querySelector("#email");

const messageInput= document.querySelector("#message");

const myForm= document.querySelector("#form");

const msgError= document.querySelector(".msg")


/* HAMBURGER MENU FUNCTIONALITY */
hamburgerMenu.addEventListener("click" ,() => {
  mobileMenu.classList.add("mobile-nav-in")
  mobileMenu.classList.remove("mobile-nav-out")
});

cancelBtn.addEventListener("click" ,() => {
  mobileMenu.classList.add("mobile-nav-out")
  mobileMenu.classList.remove("mobile-nav-in")

});

//FORM VALIDATION //
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === ''){
    msgError.classList.add('error');

    msgError.innerHTML='Please enter all fields';

    setTimeout( () => msgError.remove(), 3000)
  }

    // Clear fields 
    nameInput.value= '';
    emailInput.value='';
    messageInput.value= '';

    myForm.addEventListener('submit',onSubmit);

    function onSubmit(e){
      e.preventDefault();
    
      if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
    
        msgError.innerHTML='Please enter all fields';
    
        setTimeout( () => msgError.remove(), 3000)
      }else{
    
        // Clear fields 
        nameInput.value= '';
        emailInput.value='';
    
      }
    }
}