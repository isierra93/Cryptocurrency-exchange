//Se capturan los elementos del DOM

let cryptoOption = document.getElementById(`cryptoOption`);
let cryptoMount = document.getElementById("cryptoMount");
let buttonCompra = document.getElementById(`buttonCompra`);
let result = document.getElementById(`result`);
let verSaldos = document.getElementById(`verSaldos`);



//Funciones

buttonCompra.onclick = (e) => {

    e.preventDefault();

    if (cryptoMount.value < 1) {
        Swal.fire({
            title: 'Error en operacion',
            text: 'Intente nuevamente.',
            icon: 'error',
            showConfirmButton: false,
            timer: 2750,
        })
    } else {
        cryptoMount.value = +(cryptoMount.value);

        let compraActual = cryptoMount.value / (monedasListadas)[+(cryptoOption.value)].valor;


        cargarSaldo(+(cryptoOption.value), compraActual)

        obtenerFecha ((monedasListadas)[+(cryptoOption.value)].nombre, compraActual);

        Swal.fire({
            title: 'Operacion exitosa!',
            text: 'Compraste: ' + compraActual + ` de ` + (monedasListadas)[+(cryptoOption.value)].nombre,
            icon: 'success',
            showConfirmButton: false,
            timer: 2750,
        })
    }




    cryptoMount.value = ``;


}

cargarSaldo = (index, cantidad) => {

    let monedasListadas = JSON.parse(localStorage.getItem(`monedasListadasenJSON`))
    monedasListadas[index].wallet += cantidad;

    localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas));
}


verSaldos.onclick = (e) => {
    e.preventDefault();

    mostrarSaldo();

}


mostrarSaldo = () => {

    let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`));

    result.innerHTML = `<h1>Wallet</h1>`;

    for (i = 0; i < saldos.length; i++) {

        let { nombre, wallet } = saldos[i]

        let walletVision = document.createElement(`div`)
        walletVision.className = `contenedorSaldos`
        walletVision.innerHTML = `<p><b>Moneda:</b> ${nombre}</p>
                                <p><b>Cantidad:</b> ${wallet}</p>`

        result.append(walletVision);
    }

}

