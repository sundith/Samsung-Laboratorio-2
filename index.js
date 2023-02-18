var nameUser = document.getElementById('name');
var emailUser = document.getElementById('email');
var passwordUser = document.getElementById('password');
var passwordUser = document.getElementById('password');

var nameUserError = document.getElementById('nameError');
var emailUserError = document.getElementById('emailError');
var passwordUserError = document.getElementById('passError');
var errorConfirm = document.getElementById('confirmError');


function nombreValido(){ 
	var nameUserValido = /^[A-Za-z\s]+$/; 
	
	if(nameUser.value == 0){ 
		nameUserError.innerHTML = "Rellene este campo"; 
		nameUser.classList.add("invalid");
		nameUser.classList.add("errorIcon");
		return false; 
	}
	else if(nameUserValido.test(nameUser.value)){
		nameUser.classList.remove("invalid"); 
		nameUser.classList.remove("errorIcon");
		nameUserError.innerHTML = "";
		nameUser.classList.add("valid");
		nameUser.classList.add("successIcon");
		return true; 
	}
	else {
		nameUserError.innerHTML = "Nombre invalido. Solo se admite tipo texto."; 
		nameUser.classList.add("invalid");
		nameUser.classList.add("errorIcon");
		return false; }
	}

	
function emailValido(){
	var emailUserValido =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;

	if(emailUser.value == 0){
		emailUserError.innerHTML = "Rellene este campo";
		emailUser.classList.add("invalid");
		emailUser.classList.add("errorIcon");
		return false; 
	}
	else if(emailUserValido.test(emailUser.value) ){
		emailUser.classList.remove("invalid");
		emailUser.classList.remove("errorIcon");
		emailUserError.innerHTML = "";
		emailUser.classList.add("valid");
		emailUser.classList.add("successIcon");
		return true; 
	}
	else {
		emailUserError.innerHTML = "Email invalido";
		emailUser.classList.add("invalid");
		emailUser.classList.add("errorIcon");
		return false; 
	}
} 


function passwordValido(){
	var passwordUserValido = /^.{8,20}$/;

	if(passwordUser.value == 0){
		passwordUserError.innerHTML = "Rellene este campo";
		passwordUser.classList.add("invalid");
		passwordUser.classList.add("errorIcon");
		return false; 
	}
	else if(passwordUserValido.test(passwordUser.value)){
		passwordUser.classList.remove("invalid");
		passwordUser.classList.remove("errorIcon");
		passwordUserError.innerHTML = "";
		passwordUser.classList.add("valid");
		passwordUser.classList.add("successIcon");
		return true; 
	}
	else {	
		passwordUserError.innerHTML = "Debe tener al menos 8 caracteres";
		passwordUser.classList.add("invalid");
		passwordUser.classList.add("errorIcon");
		return false; }
}


function verificarValido(){
	var confirmField = document.getElementById('confirm');

	if(confirmField.value == 0){
		errorConfirm.innerHTML = "Rellene este campo";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false;
	 }
	else if (passwordUser.value == confirmField.value ){
		confirmField.classList.remove("invalid");
		confirmField.classList.remove("errorIcon");
		errorConfirm.innerHTML = "";
		confirmField.classList.add("valid");
		confirmField.classList.add("successIcon");
		return true; 
	}
	else {
		errorConfirm.innerHTML = "Las contraseñas no coinciden";
		confirmField.classList.add("invalid");
		confirmField.classList.add("errorIcon");
		return false; 
	} 
}


function formularioValido(){
	if (verificarValido() && passwordValido() && emailValido() && nombreValido()){
		alert("La inscripción ha sido correcta");
		return true; }
	else {
		return false; }
    }