// modal toggling

// BigScreen
const loginBtn = document.getElementById("loginBtn");
const SignBtn = document.getElementById("SignBtn");

// SmallScreen 
const loginBtnMobile = document.getElementById("loginBtnMobile");
const SignBtnMobile = document.getElementById("SignBtnMobile");

// modal - login & sign up
const modal = document.getElementById("modal");
const modalSignUp = document.getElementById("modal-sign");

const closeBtn = document.getElementById("close");
const closeBtnSignup = document.getElementById("close-signup");
const menuToggle = document.getElementById("togg-display");


// login 
loginBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

SignBtn.addEventListener("click", () => {
    modalSignUp.style.display = "block";
});

loginBtnMobile.addEventListener("click", () => {
    modal.style.display = "block";
    menuToggle.style.display = "none";
});

SignBtnMobile.addEventListener("click", () => {
    modalSignUp.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

closeBtnSignup.addEventListener("click", () => {
    modalSignUp.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalSignUp.style.display = "none";
    }
});


// Function to toggle the hamburger menu
function toggle() {
    menuToggle.style.display = "flex";
}

// Function to cancel the hamburger menu
function cancel() {
    menuToggle.style.display = "none";
}
