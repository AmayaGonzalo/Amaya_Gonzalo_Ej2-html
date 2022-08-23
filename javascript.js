let btnCrear = document.querySelector("#btnCrear");
let ingreso = document.getElementById("ingreso");
let contador;
let h1 = document.querySelector("h1");

function crearCaja() {
  let i = 0;
  for (i; i < cantidad; i++) {
    let caja = document.createElement("div");
    caja.classList.add(".caja");
    h1.appendChild(caja);
  }
}

btnCrear.addEventListener("click", () => {
  ingreso = String(ingreso.value);
  cantidad = parseInt(ingreso);
  crearCaja();
});
