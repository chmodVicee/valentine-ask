const envoltura = document.getElementById("container-envoltura")
const carta = document.getElementById("container-carta")
const noBtn = document.querySelector(".no-btn")
const yesBtn = document.querySelector(".btn[alt='Yes']")

const titulo = document.getElementById("titulo-carta")
const catImg = document.getElementById("gato-carta")
const botones = document.getElementById("botones-carta")
const textoFinalSi = document.getElementById("texto-final-si")
const textoFinalNo = document.getElementById("texto-final-no")

envoltura.addEventListener("click", () => {
    envoltura.style.display = "none";
    carta.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".ventana-carta").classList.add("open")
    },50)
})

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;
    
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
    titulo.textContent = "OMG";

    catImg.src = "gif/cat_dance.gif"

    document.querySelector(".ventana-carta").classList.add("final");

    botones.style.display = "none";

    textoFinal.style.display = "block";
});

noBtn.addEventListener("click", () => {
    titulo.textContent = ":(";

    catImg.src = "img/sadBob.png"

    document.querySelector(".ventana-carta").classList.add("final");

    botones.style.display = "none";

    textoFinalNo.style.display = "block";

});