let navbar = document.querySelector(".navc");

document.querySelector("#menu_tôfi").onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector(#menu_tôfi).onclick = () => {
    navbar.classlist.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");
    let dropdownContent = document.querySelector(".dropdown-content");

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation(); // Empêche la fermeture immédiate
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    // Ferme le dropdown si on clique ailleurs
    document.addEventListener("click", function () {
        dropdownContent.style.display = "none";
    });

    // Empêche la fermeture quand on clique à l'intérieur du dropdown
    dropdownContent.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
