// Elementos da SolarTech
const solarTechShowInfoBtn = document.getElementById('show-info-btn-solartech');
const solarTechModal = document.getElementById('modal-solartech');
const solarTechCloseBtn = document.getElementById('close-btn-solartech');

//  modal da SolarTech
solarTechShowInfoBtn.addEventListener('click', function() {
    solarTechModal.style.display = 'flex';
});

// Fecha a SolarTech
solarTechCloseBtn.addEventListener('click', function() {
    solarTechModal.style.display = 'none';
});

// Elementos da Ventus
const ventusShowInfoBtn = document.getElementById('show-info-btn-ventus');
const ventusModal = document.getElementById('modal-ventus');
const ventusCloseBtn = document.getElementById('close-btn-ventus');

// Exibe Ventus
ventusShowInfoBtn.addEventListener('click', function() {
    ventusModal.style.display = 'flex';
});

// Fecha a Ventus
ventusCloseBtn.addEventListener('click', function() {
    ventusModal.style.display = 'none';
});



/*logica do loggin*/

// Correção para ocultar o "companyFields" inicialmente
document.addEventListener("DOMContentLoaded", function () {
    const companyFields = document.getElementById("companyFields");
    companyFields.classList.add("hidden"); // Certificar-se de que está oculto no carregamento
});






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