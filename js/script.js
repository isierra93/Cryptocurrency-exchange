//Se capturan los elementos del DOM

let cryptoOption = document.getElementById(`cryptoOption`);
let cryptoMount = document.getElementById("cryptoMount");
let buttonCompra = document.getElementById(`buttonCompra`);

//Titulo en efecto
let text = document.getElementById(`welcomeTitle`);
let str = text.innerHTML;

text.innerHTML = "";
let speed = 200;
let textIndex = 0;

typeWritter = () => {

    if (textIndex < str.length) {
        text.innerHTML += str.charAt(textIndex);
        textIndex++;
        setTimeout(typeWritter, speed);
    }
}
setTimeout(typeWritter, speed);

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

        obtenerFecha((monedasListadas)[+(cryptoOption.value)].nombre, compraActual);

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

