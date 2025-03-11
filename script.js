function toggleAccordionItem(item){
    item.classList.toggle("open")
}

let plusIcons = document.querySelectorAll(".plus-sign")
for(let plus of plusIcons){
    plus.addEventListener("click", function(){
        let itemBody = this.parentElement.nextElementSibling
        toggleAccordionItem(itemBody)
        if(itemBody.classList.contains("open"))
            this.src = "./assets/images/icon-minus.svg"
        else
            this.src = "./assets/images/icon-plus.svg"
    })
}