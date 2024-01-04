//Card slider for porject section
document.addEventListener("DOMContentLoaded", function () {
    let cards = document.querySelectorAll(".card");
    //variable to control clicks and reset after each card is displayed
    let lastClickedCard = null;

    cards.forEach(function (card) {
        let link = card.querySelector("a");

        card.addEventListener("click", function (event) {
            if (link && link.href) {
                if (card === lastClickedCard) {
                    window.location.href = link.href;
                } else {
                    lastClickedCard = card;
                }
            } else {
                card.dataset.clicked = !(card.dataset.clicked === "true");
                card.classList.toggle("show-description", card.dataset.clicked);
                lastClickedCard = null;
            }
        });

        // Prevent the click on the link from propagating to the card
        if (link) link.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
});


// Function to open WELCOME modal
// function openModal() {
//     let hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
//     if (!hasVisitedBefore) {
//         document.getElementById('welcomeModal').style.display = 'block';
//         localStorage.setItem('hasVisitedBefore', true);
//     }
// }
function openModal() {
document.getElementById('welcomeModal').style.display = 'block';
}
function closeModal() {
    document.getElementById('friendLink').addEventListener('click', closeModal);
    document.getElementById('welcomeModal').style.display = 'none';
}
window.onload = openModal;