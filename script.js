function toggleDetails(elementId) {
    const details = document.getElementById(elementId);
    const arrow = details.previousElementSibling.querySelector(".arrow");

    if (details.classList.contains("details-hidden")) {
        details.classList.remove("details-hidden");
        arrow.textContent = "˄"; // Mudança para indicar que a descrição está visível
    } else {
        details.classList.add("details-hidden");
        arrow.textContent = "˅"; // Mudança para indicar que a descrição está oculta
    }
}

// Adicionando eventos de clique nos itens da lista
document.addEventListener("DOMContentLoaded", function() {
    const fantasyItem = document.querySelector(".entretenimento ul li:nth-child(1)");
    const treasureItem = document.querySelector(".entretenimento ul li:nth-child(2)");

    fantasyItem.addEventListener("click", function() {
        toggleDetails("fantasy-details");
    });

    treasureItem.addEventListener("click", function() {
        toggleDetails("treasure-details");
    });
});
