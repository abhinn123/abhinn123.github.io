let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if (mysrc == "images/mackbook.jpeg") {
        myImage.setAttribute('src', "images/mackbook2.jpeg");
    }
    else {
        myImage.setAttribute('src', "images/mackbook.jpeg");
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUsername() {
    let myName = prompt("Enter your name: ");
    if(!myName){
        setUsername();
    }
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + " has a MacBook!";
    }
}

if(!localStorage.getItem('name')) {
    setUsername();
}
else {
    let storedname = localStorage.getItem('name');
    myHeading.innerHTML = storedname + " has a MacBook!";
}

myButton.onclick = function(){
    setUsername();
}