let modalMain = document.getElementById("modal_main");
let modalSuccess = document.getElementById("modal_success");
let modalClose_1 = modalMain.querySelector(".modal__close");
let modalClose_2 = modalSuccess.querySelector(".modal__close");
let showSuccess = modalMain.querySelector(".show-success");

modalClose_1.onclick = function() {   
  modalMain.classList.remove("modal_active");  
}

modalClose_2.onclick = function() {
  modalSuccess.classList.remove("modal_active"); 
}

showSuccess.onclick = function() {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
}