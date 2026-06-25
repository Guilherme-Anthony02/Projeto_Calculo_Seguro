import { calcularIPVA } from "./script_calculo.js";

const form = document.getElementById("formulario");
const lista = document.getElementById("listaVeiculos");

const veiculos = [];

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const placa = document.getElementById("placa").value;
    const ano = Number(document.getElementById("ano").value);
    const valor = Number(document.getElementById("valor").value);

    const combustivel = document.querySelector(
        'input[name="combustivel"]:checked'
    ).value;


    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - ano;

    const seguro = valor * 0.10;

    const ipva = calcularIPVA(
        valor,
        combustivel,
        idade
    );

    const licenciamento = 250;

    const valorFinal =
        seguro +
        (ipva === "Isento" ? 0 : ipva) +
        licenciamento;

    const veiculo = {
        marca,
        modelo,
        placa,
        idade,
        seguro,
        ipva,
        valorFinal
    };

    veiculos.push(veiculo);

    listarVeiculos();

    form.reset();
});

function listarVeiculos() {
    
    const divResultado = document.getElementById("listaVeiculos");
    
    divResultado.innerHTML = "";

    veiculos.forEach(veiculo => {
        
        let textoIpva = "";
        if (veiculo.ipva === "Isento") {
            textoIpva = "Isento";
        } else {
            textoIpva = "R$ " + veiculo.ipva.toFixed(2);
        }

        divResultado.innerHTML += `
            <div class="veiculo">
                <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
                <p><strong>Marca:</strong> ${veiculo.marca}</p>
                <p><strong>Placa:</strong> ${veiculo.placa}</p>
                <p><strong>Idade:</strong> ${veiculo.idade} anos</p>
                <p><strong>Seguro:</strong> R$ ${veiculo.seguro.toFixed(2)}</p>
                <p><strong>IPVA:</strong> ${textoIpva}</p>
                <p><strong>Licenciamento:</strong> R$ 250,00</p>
                <p><strong>Valor Final:</strong> R$ ${veiculo.valorFinal.toFixed(2)}</p>
            </div>
        `;
    });
}

