//Méthode sans onclick dans le code html de l'image
let titles = document.querySelectorAll(".accordion-item-title")
for(let title of titles){
    title.addEventListener("click", function(){
        let itemBody = this.nextElementSibling
        let img = title.querySelector("img")
        itemBody.classList.toggle("open")
        img.src = itemBody.classList.contains("open") ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg"
    })
}

//Méthode avec onclick dans le code html de l'image
//décommenter si vous voulez utiliser onclick
// function openBody(title) {
//     let itemBody = title.nextElementSibling
//     itemBody.classList.toggle("open")
//     let img = title.querySelector("img")
//     img.src = itemBody.classList.contains("open") ? "./assets/images/icon-minus.svg" : "./assets/images/icon-plus.svg"
// }