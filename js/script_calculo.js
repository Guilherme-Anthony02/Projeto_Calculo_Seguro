export function calcularIPVA(valorVeiculo, combustivel, idadeVeiculo) {

    if (idadeVeiculo > 20) {
        return "Isento";
    }

    let aliquota = 0;

    if (combustivel === "gasolina") {
        aliquota = 0.20;
    } else if (combustivel === "etanol") {
        aliquota = 0.15;
    } else if (combustivel === "bicombustivel") {
        aliquota = 0.10;
    } else if (combustivel === "hibrido") {
        aliquota = 0.08;
    } else if (combustivel === "eletrico") {
        aliquota = 0.02;
    }

    return valorVeiculo * aliquota;
}

const valorSeguro = document.getElementById('valor')
return valorSeguro * 0.10

