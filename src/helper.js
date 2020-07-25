//Diferencia año actual
export function obtenerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

//Calcular el total según la marca
export function calcularMarca(marca) {
    let incremento;

    switch(marca){
        case "europeo": incremento = 1.30;
            break;
        case "americano": incremento = 1.15;
            break;
        case "asiatico": incremento = 1.15;
            break;
        default: break;
    }

    return incremento;
}

//Calcular el total según el plan
export function calcularPlan(plan) {
    let incremento;

    switch(plan){
        case "basico": incremento = 1.2;
            break;
        case "completo": incremento = 1.5;
            break;
        default: break;
    }

    return incremento;
}