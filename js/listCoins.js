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

