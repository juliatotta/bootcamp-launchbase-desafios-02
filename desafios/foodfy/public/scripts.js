const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.cards')

for (let card of cards) {
    card.addEventListener("click", function () {
        modalOverlay.classList.add("active")
        modalOverlay.classList.add("card-logo")
        
    })
}

