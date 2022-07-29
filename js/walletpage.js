//Wallet
let result = document.getElementById(`result`);

mostrarSaldo = () => {

  let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`));


  saldos.forEach(element => {
    let walletVision = document.createElement(`div`);
    walletVision.className = `cardContenedor`;
    walletVision.innerHTML = `<div class="card" style="width: 16rem;">
              <img src="../img/${element.nombre.toLowerCase()}.jpg" class="card-img-top" alt="">
              <div class="card-body">
        <h5 class="card-title">${element.nombre}</h5>
        <p class="card-text">${element.wallet}</p>
        <p class="card-text" id="usd${element.nombre}"></p>
      </div>
    </div>`
    result.append(walletVision);
  });


  saldoEnVivo();


}

saldoEnVivo = () => {
  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano&vs_currencies=usd`)
    .then((response) => response.json())
    .then((data) => {
      let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`));

      let usdBitcoin = document.getElementById(`usdBitcoin`);
      let saldoBtc = saldos[0].wallet * data.bitcoin.usd;
      usdBitcoin.innerText = `Saldo: $ ${saldoBtc.toFixed(3)}`;

      let usdEther = document.getElementById(`usdEther`);
      let saldoEther = saldos[1].wallet * data.ethereum.usd;
      usdEther.innerText = `Saldo: $ ${saldoEther.toFixed(3)}`;

      let usdCardano = document.getElementById(`usdCardano`);
      let saldoCardano = saldos[2].wallet * data.cardano.usd;
      usdCardano.innerText = `Saldo: $ ${saldoCardano.toFixed(3)}`;
    });
}

mostrarSaldo();

setInterval(saldoEnVivo, 5000);

