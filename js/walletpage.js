//Wallet
let result = document.getElementById(`result`);

mostrarSaldo = () => {


    let saldos = JSON.parse(localStorage.getItem(`monedasListadasenJSON`));


    saldos.forEach(element => {
        let walletVision = document.createElement(`div`);
        walletVision.className = `cardContenedor`;
        walletVision.innerHTML = `<div class="card" style="width: 16rem;">
                <img src="../img/${element.nombre}.jpg" class="card-img-top" alt="">
                <div class="card-body">
          <h5 class="card-title">${element.nombre}</h5>
          <p class="card-text">${element.wallet}</p>
        </div>
      </div>`
      result.append(walletVision);
    });

}

mostrarSaldo ();

