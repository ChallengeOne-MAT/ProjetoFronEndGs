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
