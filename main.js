// Variables y constantes
const tarifaPorNoche = 100;
let presupuestoCliente, numeroNoches, numeroPersonas, numeroCamas;

// Función para validar la entrada del usuario
function validarEntradaUsuario() {
    presupuestoCliente = parseFloat(prompt("Ingrese su presupuesto por noche:"));

    if (presupuestoCliente < tarifaPorNoche) {
        alert("No contamos con habitaciones de ese presupuesto por noche, solo de $100 en adelante. Agregue un presupuesto más alto.");
        return false;
    }

    numeroNoches = parseInt(prompt("¿Cuántas noches desea reservar?"));
    numeroPersonas = parseInt(prompt("¿Cuántas personas se hospedarán?"));
    numeroCamas = parseInt(prompt("¿Cuántas camas necesita?"));

    if (
        isNaN(numeroNoches) ||
        isNaN(numeroPersonas) ||
        isNaN(numeroCamas) ||
        numeroNoches <= 0 ||
        numeroPersonas <= 0 ||
        numeroCamas <= 0
    ) {
        alert("Por favor, ingrese valores válidos.");
        return false;
    }

    return true;
}

// Función para calcular el costo total de la reserva
function calcularCostoTotal() {
    return tarifaPorNoche * numeroNoches;
}

// Función para verificar la disponibilidad de camas
function verificarDisponibilidadCamas() {
    if (numeroCamas <= numeroPersonas) {
        alert("Reserva exitosa. Su costo total es $" + calcularCostoTotal().toFixed(2));
    } else {
        alert("Lo sentimos, no tenemos suficientes camas para su grupo.");
    }
}

// Lógica principal
if (validarEntradaUsuario()) {
    verificarDisponibilidadCamas();
}
