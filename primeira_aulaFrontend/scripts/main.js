//const meuCabecalho = document.querySelector("h1");
//console.log(meuCabecalho.textContent);
//meuCabecalho.textContent = "Olá, mundo!";

document.querySelector("html").addEventListener("click", function() {
  alert("Vocem clicou aqui!");

})

const myImage = document.querySelector("img");

myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "imagem/logo-senai.jpg") {
        myImage.setAttribute("src", "imagem/logo-senai-2.png");
    } else {
        myImage.setAttribute("src", "imagem/logo-senai.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Por favor, digite seu nome.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bem-vindo ao SENAI, ${myName};`

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Bem-vindo ao SENAI, ${storedName}`;
    }
    
}

myButton.onclick = function() {
    setUserName();
}