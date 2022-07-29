let registroCompras = [];
//Luxon
const DateTime = luxon.DateTime;
if (localStorage.getItem(`historialTransacciones`) === null) {
    localStorage.setItem(`historialTransacciones`, JSON.stringify(registroCompras));
} else {
    registroCompras = JSON.parse(localStorage.getItem(`historialTransacciones`));
}

// Funciones globales

class Historial {
    constructor(nombre, cantidad, fecha) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.fecha = fecha;
    }

}

mostrarHistorial = () => {

    let registro = registroCompras.reverse();

    for (const transaccion of registro) {
        let fila = document.createElement(`div`);
        fila.className = `transaccionItem`
        fila.innerHTML = `<p>Fecha: ${transaccion.fecha} - Moneda: ${transaccion.nombre} - Cantidad: ${transaccion.cantidad}</p>`;

        listadoTransacciones.append(fila);

    }
}

obtenerFecha = (nombre, cantidad) => {
    let fechaactual = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);

    registroCompras.push(new Historial(nombre, cantidad, fechaactual));

    localStorage.setItem(`historialTransacciones`, JSON.stringify(registroCompras));

}

cargarSaldo = (index, cantidad) => {

    let monedasListadas = JSON.parse(localStorage.getItem(`monedasListadasenJSON`))
    monedasListadas[index].wallet += cantidad;

    localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas));
}