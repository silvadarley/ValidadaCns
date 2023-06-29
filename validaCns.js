function validaCns(cns) {
    cns = cns.replace(/\D/g, "");

    if (cns.length < 15) {
        alert(`O CNS ${cns}\nÉ menor que o esperado!\nO documento deve ter 15 caratcters.`)
        return false;
    }

    //Valida os CNS padrão antigo
    if (["1", "2"].includes(cns[0])) {
        
        const pis = cns.substr(0, 11);
        const sum = pis.split("").reduce((total, value, index) => total + (value * (15 - index)), 0);
        const rest = sum % 11; const digit = rest === 0 ? 0 : 11 - rest;
        const result = digit === 10 ? `${pis}001${(11 - ((sum + 2) % 11))}` : `${pis}000${digit}`;

        if (result === cns) {
            return true;
        }
    }

    //Valida os CNS padrão novo
    if (["7", "8", "9"].includes(cns[0])) {

        const sum = cns.split("").reduce((total, value, index) => total + (value * (15 - index)), 0);
        console.log(sum)
        const result = sum % 11 === 0;

        if (result) {
            return true;
        }
    }
    alert(`O CNS ${cns}\nNão é um documento válido!`)
}