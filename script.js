document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

// Limpiar errores
document.querySelectorAll(".error").forEach(el => el.textContent = "");

// First Name
let first = document.getElementById("firstName");
if(first.value === ""){
  first.nextElementSibling.textContent = "This field is required";
  valid = false;
}

// Last Name
let last = document.getElementById("lastName");
if(last.value === ""){
  last.nextElementSibling.textContent = "This field is required";
  valid = false;
}

// Email
let email = document.getElementById("email");
if(!email.value.includes("@")){
  email.nextElementSibling.textContent = "Please enter a valid email address";
  valid = false;
}

// Query Type
let query = document.querySelector('input[name="query"]:checked');
if(!query){
  document.querySelector('.radio-group').nextElementSibling.textContent =
  "Please select a query type";
  valid = false;
}

// Message
let message = document.getElementById("message");
if(message.value === ""){
  message.nextElementSibling.textContent = "This field is required";
  valid = false;
}

// Consent
let consent = document.getElementById("consent");
if(!consent.checked){
  consent.parentElement.nextElementSibling.textContent =
  "To submit this form, please consent to being contacted";
  valid = false;
}

if(valid){
  alert("Formulario enviado correctamente");
}

});
