
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
