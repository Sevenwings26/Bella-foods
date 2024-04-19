// toggle for small screens 
const toggleDisplay = document.getElementById('togg-display');

let navLink = document.querySelector(".nav-links2");
function toggle(){


    if (toggleDisplay.style.display === 'none'){
        toggleDisplay.style.display = 'block'
        navLink.style.width = "100%"
        navLink.style.display = "flex"
    } else {
        toggleDisplay.style.display = 'none';
    }
}


function cancel() {
    toggleDisplay.style.display = 'none';    
}


const viewLoginModal = document.querySelector('#login-view');

let modalView = document.getElementById('login-modal');

viewLoginModal.addEventListener('click', function() {
    // alert('')
    if (modalView.style.display === none){
    
    modalView.style.display = 'block';
}else {
    modalView.style.display = 'none';
}

});
