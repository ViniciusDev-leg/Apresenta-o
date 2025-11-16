hamburguer = document.querySelector("#container-hamburguer")
menu = document.querySelector("#container-menu")

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    menu.classList.toggle("active")

})