
/*logica para pesquisa da pag*/

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("inputSearch");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function() {
        const query = searchInput.value.toLowerCase();

        const keywordDestinations = {
            "início": "#",
            "projetos": "../html/projetos.html",
            "equipe": "../html/equipe.html",
            "sugestões": "../html/Sugestão.html",
            "vantagens": ".sectionThree",
            "opiniao": ".sectionSeven"
        };

        if (keywordDestinations[query]) {
            window.location.href = keywordDestinations[query];
        } else {
            alert("Palavra-chave não encontrada.");
        }
    });
});





/*logica para calculo de energia*/

document.getElementById("solar-calculator").addEventListener("submit", function(event) {
    event.preventDefault();

    const capacidade = parseFloat(document.getElementById("solar-capacity").value);
    const horasSol = parseFloat(document.getElementById("sunlight-hours").value);
    const consumoMensal = parseFloat(document.getElementById("monthly-usage").value);
    const custoKwh = parseFloat(document.getElementById("kwh-cost").value);

    if (isNaN(capacidade) || isNaN(horasSol) || isNaN(consumoMensal) || isNaN(custoKwh)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const producaoDiaria = capacidade * horasSol;
    const producaoAnual = producaoDiaria * 365;

    const consumoAnual = consumoMensal * 12;

    const economia = consumoAnual - producaoAnual;

    const resultado = `
        <p><strong>Produção Anual do Sistema Solar:</strong> ${producaoAnual} kWh</p>
        <p><strong>Consumo Anual:</strong> ${consumoAnual} kWh</p>
        <p><strong>Diferença (Economia Potencial):</strong> ${economia} kWh</p>
    `;
    document.getElementById("solar-result").innerHTML = resultado;
});




/*logica do loggin*/


document.addEventListener("DOMContentLoaded", function () {
    const openRegistrationPopupButton = document.getElementById("openRegistrationPopupButton");
    const closeRegistrationPopupButton = document.getElementById("closeRegistrationPopupButton");
    const registrationPopup = document.getElementById("userRegistrationPopup");
    const individualButton = document.getElementById("individualButton");
    const companyButton = document.getElementById("companyButton");
    const companyFields = document.getElementById("companyFields");

    // Abrir o popup
    openRegistrationPopupButton.addEventListener("click", () => {
        registrationPopup.classList.remove("hidden");
    });

    // Fechar o popup 
    closeRegistrationPopupButton.addEventListener("click", () => {
        registrationPopup.classList.add("hidden");
    });

    // Mostrar e empresa
    individualButton.addEventListener("click", () => {
        companyFields.classList.add("hidden");
    });

    // Mostrar  usuário
    companyButton.addEventListener("click", () => {
        companyFields.classList.remove("hidden");
    });
});
