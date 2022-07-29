//Se capturan los elementos del DOM

let cryptoOption = document.getElementById(`cryptoOption`);
let cryptoMount = document.getElementById("cryptoMount");
let buttonCompra = document.getElementById(`buttonCompra`);

//Titulo en efecto maquina de escribir
let text = document.getElementById(`welcomeTitle`);
let str = text.innerHTML;

text.innerHTML = "";
let speed = 150;
let textIndex = 0;

typeWritter = () => {

    if (textIndex < str.length) {
        text.innerHTML += str.charAt(textIndex);
        textIndex++;
        setTimeout(typeWritter, speed);
    }
}
setTimeout(typeWritter, speed);

//Se crean options de monedas en el DOM
monedasListadas.forEach(element => {
    let option = document.createElement(`option`);
    option.value = monedasListadas.indexOf(element);
    option.innerText = `${element.nombre}`;
    cryptoOption.append(option);

});

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

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano&vs_currencies=usd`)
            .then((response) => response.json())
            .then((data) => {

                let valorActual;
                switch (+(cryptoOption.value)) {
                    case 0:
                        valorActual = data.bitcoin.usd;
                        break;
                    case 1:
                        valorActual = data.ethereum.usd
                        break;
                    case 2:
                        valorActual = data.cardano.usd
                        break
                }

                let compraActual = cryptoMount.value / valorActual;

                Swal.fire({
                    title:`Atencion!`,
                    text: `Vas a comprar ${compraActual} de ${(monedasListadas)[+(cryptoOption.value)].nombre} a un precio de $USD: ${valorActual} .`,
                    icon: `warning`,
                    showCancelButton: true,
                    confirmButtonText: `Continuar`,
                    cancelButtonText: `Cancelar`,
                }).then((result) => {
                    if(result.isConfirmed){
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
                })
                cryptoMount.value = ``;
            });
    }
}

cargarSaldo = (index, cantidad) => {

    let monedasListadas = JSON.parse(localStorage.getItem(`monedasListadasenJSON`))
    monedasListadas[index].wallet += cantidad;

    localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas));
}

