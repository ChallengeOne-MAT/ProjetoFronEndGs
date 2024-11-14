
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




// Variáveis de controle
let inactivityTimeout;
let isUserInactive = false;

// Função do aviso
function showInactivityWarning() {
    const warningDiv = document.getElementById('inactivity-warning');
    warningDiv.style.display = 'block';
}

// Função para reiniciar o temporizador de inatividade
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);

 
    inactivityTimeout = setTimeout(() => {
        if (!isUserInactive) {
            isUserInactive = true;
            showInactivityWarning();
        }
    }, 8 * 60 * 1000); 
}

// Funções de  capturar da atividade do usuário
function userActivity() {
    isUserInactive = false;
    resetInactivityTimer();
}

// Detecta atividade do usuário
document.addEventListener('mousemove', userActivity);
document.addEventListener('click', userActivity);
document.addEventListener('keydown', userActivity);

// Inicializa o temporizador
resetInactivityTimer();

//logica de resposta do usuário (sim ou não)
document.getElementById('yes-notifications').addEventListener('click', () => {
  
    alert('Você receberá notificações sobre inatividade de energia.');
    document.getElementById('inactivity-warning').style.display = 'none';
});

document.getElementById('no-notifications').addEventListener('click', () => {
    alert('Você não receberá notificações sobre inatividade de energia.');
    document.getElementById('inactivity-warning').style.display = 'none';
});



document.addEventListener('keydown', function(event) {
    const sections = document.querySelectorAll("section");
    let currentIndex = 0;

    // Encontrar a seção atual que está visível no viewport
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            currentIndex = index;
        }
    });


    document.getElementById('no-notifications').addEventListener('click', () => {
        alert('Você não receberá notificações sobre inatividade de energia.');
        document.getElementById('inactivity-warning').style.display = 'none';
    });
    document.addEventListener('keydown', function (event) {
        const sections = document.querySelectorAll("section");
        let currentIndex = -1;
    
        // Encontrar a seção atual que está visível no viewport
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                currentIndex = index;
            }
        });
    
        // Detecta as setas para cima e para baixo
        if (event.key === "ArrowDown") {
            event.preventDefault();
            if (currentIndex < sections.length - 1) {
                // Move para a próxima seção
                sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" });
            }
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (currentIndex > 0) {
                // Move para a seção anterior
                sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" });
            }
        }
    });

});
