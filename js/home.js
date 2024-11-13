
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

// Função para exibir o aviso
function showInactivityWarning() {
    const warningDiv = document.getElementById('inactivity-warning');
    warningDiv.style.display = 'block';
}

// Função para reiniciar o temporizador de inatividade
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout); // Limpa o temporizador anterior

    // Se o usuário não tiver feito nada em X minutos (5 minutos no exemplo), mostrar o aviso
    inactivityTimeout = setTimeout(() => {
        if (!isUserInactive) {
            isUserInactive = true;
            showInactivityWarning();
        }
    }, 1 * 60 * 1000); // 5 minutos (em milissegundos)
}

// Funções para capturar atividade do usuário (movimento do mouse, clique, teclado)
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

// Função para lidar com a resposta do usuário (sim ou não)
document.getElementById('yes-notifications').addEventListener('click', () => {
    // Aqui você pode salvar a escolha do usuário ou iniciar a funcionalidade de notificações
    alert('Você receberá notificações sobre inatividade de energia.');
    document.getElementById('inactivity-warning').style.display = 'none';
});

document.getElementById('no-notifications').addEventListener('click', () => {
    // O usuário não quer receber notificações, pode fechar o aviso
    alert('Você não receberá notificações sobre inatividade de energia.');
    document.getElementById('inactivity-warning').style.display = 'none';
});
