

document.addEventListener("DOMContentLoaded", function () {
    const openRegistrationPopupButton = document.getElementById("openRegistrationPopupButton");
    const closeRegistrationPopupButton = document.getElementById("closeRegistrationPopupButton");
    const registrationPopup = document.getElementById("userRegistrationPopup");
    const individualButton = document.getElementById("individualButton");
    const companyButton = document.getElementById("companyButton");
    const companyFields = document.getElementById("companyFields");
    const generalFields = document.querySelector(".general-fields");

    openRegistrationPopupButton.addEventListener("click", () => {
        registrationPopup.classList.remove("hidden");
    });

    closeRegistrationPopupButton.addEventListener("click", () => {
        registrationPopup.classList.add("hidden");
    });

    individualButton.addEventListener("click", () => {
        companyFields.classList.add("hidden");
        generalFields.classList.remove("hidden");
    });

    companyButton.addEventListener("click", () => {
        companyFields.classList.remove("hidden");
        generalFields.classList.add("hidden");
    });
});



/*logica para pesquisa da pag*/
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("inputSearch");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase().trim(); // Normaliza a pesquisa

        const keywordDestinations = {
            "opiniao": "#opiniao",
            "problemas": "#problemas",
            "chatbot": "#chatbot",
        };

       
        if (keywordDestinations[query]) {
            const destination = keywordDestinations[query];
            document.querySelector(destination).scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Palavra-chave não encontrada.");
        }
    });
});



/*logica do botao de voltar ao topo */
const scrollToTopButton = document.getElementById("botao-topo");


window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};


scrollToTopButton.onclick = function () {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};
