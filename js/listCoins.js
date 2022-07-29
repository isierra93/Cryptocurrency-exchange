/* Se declara la clase moneda con sus variables */
class Monedas {
    constructor(nombre, wallet = 0) {
        this.nombre = nombre;
        this.wallet = wallet;
    }
}

/* Se declaran las monedas listadas y se las agrega al array */
const btc = new Monedas(`Bitcoin`)
const eth = new Monedas(`Ether`);
const ada = new Monedas(`Cardano`);

const monedasListadas = [btc, eth, ada];


// Si no tiene saldos cargados en el storage, se cargan. Si ya tenia, se sigue
localStorage.getItem(`monedasListadasenJSON`) === null && localStorage.setItem(`monedasListadasenJSON`, JSON.stringify(monedasListadas));