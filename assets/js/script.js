hamburguer = document.querySelector("#container-hamburguer")
menu = document.querySelector("#container-menu")


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active")
    menu.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 975 && window.scrollY < 1250) {
        document.querySelector("#hobbies").classList.add("active")
        document.querySelector("#hobbies-conteudo").style.display = "flex"
        for(c = 0; c < 10; c++){
            setTimeout(() => { document.querySelector("#hobbies-conteudo").style.opacity = c}, 200)
        }
    }else{
        document.querySelector("#hobbies-conteudo").style.opacity = 0
        document.querySelector("#hobbies-conteudo").style.display = 'none'
        document.querySelector("#hobbies").classList.remove("active")
    }
    
    if (window.scrollY >= 1250 && window.scrollY < 1500){
        document.querySelector("#ja-fui").classList.add("active")
        document.querySelector("#ja-fui-conteudo").style.display = "flex"
        for(c = 0; c < 10; c++){
            setTimeout(() => { document.querySelector("#ja-fui-conteudo").style.opacity = c}, 200)
        }
    } else{
        document.querySelector("#ja-fui-conteudo").style.opacity = 0
        document.querySelector("#ja-fui-conteudo").style.display = 'none'
        document.querySelector("#ja-fui").classList.remove("active")
    }

    if (window.scrollY >= 1500 && window.scrollY < (1600)){
        document.querySelector("#vou-ir").classList.add("active")
        document.querySelector("#vou-ir-conteudo").style.display = "flex"
        for(c = 0; c < 10; c++){
            setTimeout(() => { document.querySelector("#vou-ir-conteudo").style.opacity = c}, 200)
        }
    } else{
        document.querySelector("#vou-ir-conteudo").style.opacity = 0
        document.querySelector("#vou-ir-conteudo").style.display = 'none'
        document.querySelector("#vou-ir").classList.remove("active")
    }
})