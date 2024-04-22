// JavaScript for modal toggling
const loginBtn = document.getElementById("loginBtn");
const SignBtn = document.getElementById("SignBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const loginBtnMobile = document.getElementById("loginBtnMobile");
const SignBtnMobile = document.getElementById("SignBtnMobile");

loginBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

SignBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

loginBtnMobile.addEventListener("click", () => {
    modal.style.display = "block";
});

SignBtnMobile.addEventListener("click", () => {
    modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Function to toggle the hamburger menu
function toggle() {
    var menuToggle = document.getElementById("togg-display");
    menuToggle.style.display = "flex";
}

// Function to cancel the hamburger menu
function cancel() {
    var menuToggle = document.getElementById("togg-display");
    menuToggle.style.display = "none";
}
