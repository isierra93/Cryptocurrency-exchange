let cryptoOption = document.getElementById(`cryptoOption`);
let cryptoMount = document.getElementById("cryptoMount");
let buttonCompra = document.getElementById(`buttonCompra`);
let result = document.getElementById(`result`);

/* Se declara la clase moneda con sus variables */
class Monedas {
    constructor(nombre, valor, wallet = 0) {
        this.nombre = nombre;
        this.valor = valor;
        this.wallet = wallet;
    }
}

/* Se declaran las monedas listadas y se las agrega al array */
const btc = new Monedas(`Bitcoin`, 20000)
const eth = new Monedas(`Ether`, 1300);
const ada = new Monedas(`Cardano`, 1);

const monedasListadas = [btc, eth, ada];

//Si no tiene saldos cargados en el storage, se cargan. Si ya tenia, se sigue
if (localStorage.getItem(`monedasListadasenJSON`) == null) {
    console.log(`se cargan monedas al entrar`)
    localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas))
} else {
    console.log(`NO SE CARGAN`)
}



buttonCompra.onclick = (e) => {
    //Se previene la recarga de la pagina
    e.preventDefault();

    //Se parsea el monto a comprar, suma la cantidad a la wallet
    cryptoMount.value = +(cryptoMount.value);

    let compraActual = cryptoMount.value / (monedasListadas)[+(cryptoOption.value)].valor;


    cargarSaldo (+(cryptoOption.value), compraActual)



    result.innerHTML = `<h1>Compraste:</h1>
                        <p>Cantidad: ${compraActual}</p>
                        <p>Moneda: ${(monedasListadas)[+(cryptoOption.value)].nombre}</p>`


    cryptoMount.value = ``;


}

cargarSaldo = (index, cantidad) =>{
    
    let monedasListadas = JSON.parse(localStorage.getItem(`monedasListadasenJSON`))
    monedasListadas[index].wallet += cantidad;

    localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas));
}


mostrarSaldo = () => {
    for(i = 0; i < monedasListadas.length; i++){

        let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`))
        console.log(saldos[i].nombre)
        console.log(saldos[i].wallet)

        
        
    }
}
