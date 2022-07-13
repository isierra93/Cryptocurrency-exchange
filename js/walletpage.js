//Wallet
let walletBtn = document.getElementById(`walletBtn`);
let result = document.getElementById(`result`);

mostrarSaldo = () => {


    let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`));

    for (i = 0; i < saldos.length; i++) {

        let { nombre, wallet } = saldos[i]

        let walletVision = document.createElement(`div`)
        walletVision.className = `contenedorSaldos`
        walletVision.innerHTML = `<h3>${nombre}:</h3>
                                <h5>${wallet}.</h5>`

        result.append(walletVision);
    }

}

walletBtn.onclick = () => {
    mostrarSaldo ();
    
    walletBtn.remove();
}

