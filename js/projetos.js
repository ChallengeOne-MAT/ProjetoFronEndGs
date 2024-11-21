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

// ocultando o "companyFields" inicialmente
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

// Função de envio do formulário
function handleFormSubmission(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Verifica qual tipo de usuário foi escolhido e exibe a mensagem correspondente
    if (isIndividual) {
        alert('Cadastro de Usuário Individual realizado com sucesso!');
    } else if (isCompany) {
        alert('Cadastro de Empresa realizado com sucesso!');
    }

    // Fecha o popup com transição suave
    closePopup();

    // Exibe a mensagem de boas-vindas ou qualquer outro feedback adicional (opcional)
    document.getElementById('welcomeMessage').style.display = 'block';
}

// Event listeners para alternar entre os tipos de usuário
document.getElementById('individualButton').addEventListener('click', () => {
    isIndividual = true;
    isCompany = false;
    toggleUserTypeFields();
});

document.getElementById('companyButton').addEventListener('click', () => {
    isIndividual = false;
    isCompany = true;
    toggleUserTypeFields();
});

// Fecha o popup ao clicar no botão fechar
document.getElementById('closeRegistrationPopupButton').addEventListener('click', () => {
    closePopup();
});

// Adiciona o listener para o formulário
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmission);

// Função para alternar os campos visíveis
function toggleUserTypeFields() {
    const generalFields = document.getElementById('generalFields'); // Inputs gerais (Usuário)
    const companyFields = document.getElementById('companyFields'); // Inputs da empresa

    // Alterna entre os campos com base na seleção
    if (isIndividual) {
        generalFields.style.display = 'block';
        companyFields.style.display = 'none';
    } else if (isCompany) {
        generalFields.style.display = 'none';
        companyFields.style.display = 'block';
    }
}

// Função para fechar o popup com animação
function closePopup() {
    const popup = document.getElementById('userRegistrationPopup');
    popup.classList.add('hidden'); // Adiciona classe para a transição
    setTimeout(() => {
        popup.style.display = 'none';
    }, 500); // Tempo da animação (deve coincidir com o CSS)
}

// Inicializa com os campos corretos
toggleUserTypeFields();


