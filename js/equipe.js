
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
            "sulamita": "#sulamita",
            "matteus": "#matteus",
            
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
