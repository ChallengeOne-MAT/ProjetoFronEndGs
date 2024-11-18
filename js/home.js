
/*logica para pesquisa da pag*/
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("inputSearch");
    const searchButton = document.querySelector(".search-icon");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value.toLowerCase().trim(); // Normaliza a pesquisa

        const keywordDestinations = {
            "fonte renovavel": "#fonte renovavel",
            "vantagem": "#vantagem",
            "calculo": "#calcular",
            "economia": "#economizar",
            "calculo": "#calculo",
            "reducao de custos" : "#reducao de custos",
            "feedback": "#feedback",
            "parcerias": "#parcerias",
            "skills": "#skills",
            "autossuficiência": "#Autossuficiência", 
        };

       
        if (keywordDestinations[query]) {
            const destination = keywordDestinations[query];
            document.querySelector(destination).scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Palavra-chave não encontrada.");
        }
    });
});



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

    // Calcular a produção diária e anual do sistema
    const producaoDiaria = capacidade * horasSol;
    const producaoAnual = producaoDiaria * 365;

    // Calcular o consumo anual
    const consumoAnual = consumoMensal * 12;

    // Calcular a economia potencial
    const economia = consumoAnual - producaoAnual;

    // Formatando o resultado para exibir 2 casas decimais onde necessário
    const producaoAnualFormatted = producaoAnual.toFixed(3);
    const consumoAnualFormatted = consumoAnual.toFixed(3);
    const economiaFormatted = economia.toFixed(3);

    const resultado = `
        <p><strong>Produção Anual do Sistema Solar:</strong> ${producaoAnualFormatted} kWh</p>
        <p><strong>Consumo Anual:</strong> ${consumoAnualFormatted} kWh</p>
        <p><strong>Diferença (Economia Potencial):</strong> ${economiaFormatted} kWh</p>
    `;
    
    document.getElementById("solar-result").innerHTML = resultado;
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


  // Verifica se já fez login
  if (localStorage.getItem("isLoggedIn") === "true") {
    document.getElementById('welcomeMessage').innerText = "Seja bem-vindo de volta!";
    document.getElementById('welcomeMessage').style.display = 'block';

    // Esconde a mensagem depois de 3 segundos
    setTimeout(() => {
        document.getElementById('welcomeMessage').style.display = 'none';
    }, 3000);
} else {
    // Exibe o formulário de login
    document.querySelector('.login-form').style.display = 'flex';

    // Ao clicar no botão de login
    document.getElementById('loginButton').addEventListener('click', function () {
        const email = document.getElementById('email').value;

        if (email) {
            // Marca o login no localStorage
            localStorage.setItem("isLoggedIn", "true");

            // Esconde o formulário de login
            document.querySelector('.login-form').style.display = 'none';

            // Exibe a mensagem de boas-vindas
            document.getElementById('welcomeMessage').innerText = `Seja bem-vindo, ${email.split('@')[0]}!`;
            document.getElementById('welcomeMessage').style.display = 'block';

            // Esconde a mensagem depois de 3 segundos
            setTimeout(() => {
                document.getElementById('welcomeMessage').style.display = 'none';
            }, 3000);
        } else {
            alert('Por favor, insira seu email!');
        }
    });
}


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
    }, 1 * 60 * 1000); 
}

// logica da atividade do usuário
function userActivity() {
    isUserInactive = false;
    resetInactivityTimer();
}

document.addEventListener('mousemove', userActivity);
document.addEventListener('click', userActivity);
document.addEventListener('keydown', userActivity);


resetInactivityTimer();

//resposta do usuário 
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




// Variáveis para controle de tipo de usuário
let isIndividual = false;
let isCompany = false;

// Função para mostrar os campos do tipo de usuário
function toggleUserTypeFields() {
    const individualFields = document.getElementById('generalFields');
    const companyFields = document.getElementById('companyFields');

    // Esconde ou exibe os campos com base na escolha do tipo de usuário
    if (isIndividual) {
        individualFields.style.display = 'block';
        companyFields.style.display = 'none';
    } else if (isCompany) {
        individualFields.style.display = 'none';
        companyFields.style.display = 'block';
    }
}

// Função de cadastro
function handleFormSubmission(event) {
    event.preventDefault(); // Previne o comportamento padrão de envio de formulário

    // Verifica qual tipo de usuário foi escolhido
    if (isIndividual) {
        alert('Cadastro de Usuário Individual realizado com sucesso!');
    } else if (isCompany) {
        alert('Cadastro de Empresa realizado com sucesso!');
    }

    // Exibe a mensagem de boas-vindas
    document.getElementById('welcomeMessage').style.display = 'block';
    document.getElementById('userRegistrationPopup').style.display = 'none'; // Fecha o popup
}

// Event listeners para selecionar o tipo de usuário
document.getElementById('individualButton').addEventListener('click', () => {
    isIndividual = true;
    isCompany = false;
    toggleUserTypeFields();
});

document.getElementById('companyButton').addEventListener('click', () => {
    isIndividual = false;
    isCompany = true;
    toggleUserTypeFields(); // Atualiza a interface
});

// Função para abrir o popup de cadastro
document.getElementById('closeRegistrationPopupButton').addEventListener('click', () => {
    document.getElementById('userRegistrationPopup').style.display = 'none';
});

// Formulário de cadastro
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmission);

// Inicializa com os campos de Individual escondidos
toggleUserTypeFields();
