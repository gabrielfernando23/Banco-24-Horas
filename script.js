var notas_dez = 0
var notas_cinq = 0
var notas_cem = 0
var valor_disponivel = 0
var saque = 0

function segunda_fase() {
    notas_dez = Number(ipt_dez.value)
    notas_cinq = Number(ipt_cinq.value)
    notas_cem = Number(ipt_cem.value)
    valor_cem = notas_cem * 100
    valor_cinq = notas_cinq * 50
    valor_dez = notas_dez * 10
    valor_disponivel = valor_cem + valor_cinq + valor_dez
    container.style.display = 'none';
    thesecond.style.display = 'block';
}
function validar() {
    saque = Number(ipt_saque.value)
    if (saque > 0) {
        if (saque <= valor_disponivel) {
            if (saque % 10 == 0) {
            cem();
            } else {
                msg.innerHTML = `Valor não possível devido às notas disponíveis`
            }
        } else {
            msg.innerHTML = `Montante disponível não atende a solicitação`
        }
    } 
    else {
        msg.innerHTML = `Não é possível sacar 0 ou menos`
    }
}

function cem() {
     if ((saque / 100) <= notas_cem) {
         notas_cem -= (saque / 100)
         valor_disponivel -= saque
        msg.innerHTML = `Retire o dinheiro no local indicado`
    }
    else{
        cinq();
    }
}

function cinq() {
    if ((saque / 50) <= notas_cinq) {
    notas_cinq -= (saque / 50)
     valor_disponivel -= saque
    msg.innerHTML = `Retire o dinheiro no local indicado`
       }
    else {
        dez();
    } 
}

function dez() {
    if (saque % 10 == 0) {
        if ((saque / 10) <= notas_dez) {
            notas_dez -= (saque / 10)
            valor_disponivel -= saque
            msg.innerHTML = `Retire o dinheiro no local indicado`
        }
    } 
}