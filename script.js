function toggleDetails(elementId) {
    const details = document.getElementById(elementId);
    const arrow = details.previousElementSibling.querySelector(".arrow");

    if (details.classList.contains("details-hidden")) {
        details.classList.remove("details-hidden");
        arrow.textContent = "˄"; // Indica que está visível
    } else {
        details.classList.add("details-hidden");
        arrow.textContent = "˅"; // Indica que está oculto
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const fantasyItem = document.querySelector(".entretenimento ul li:nth-child(1)");
    const treasureItem = document.querySelector(".entretenimento ul li:nth-child(2)");
    const karaokeItem = document.querySelector(".entretenimento ul li:nth-child(3)");

    fantasyItem.addEventListener("click", function() {
        toggleDetails("fantasy-details");
    });

    treasureItem.addEventListener("click", function() {
        toggleDetails("treasure-details");
    });

    karaokeItem.addEventListener("click", function() {
        toggleDetails("karaoke-details");
    });
});
