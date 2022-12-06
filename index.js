const div = document.querySelectorAll('div');

function logText(e){
    console.log(this.classList.value);
    //e.stopPropagation();
    //console.log(this);
}


div.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}));