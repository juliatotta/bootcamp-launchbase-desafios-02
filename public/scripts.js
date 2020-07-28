const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for(let card of cards) {
    const modalId = card.getAttribute("id")
    card.addEventListener("click", function(){
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${modalId}`
    })
}

document.querySelector('.maximize-modal').addEventListener("click", function(){
    modal.classList.add("active")
})

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove("active")
})
