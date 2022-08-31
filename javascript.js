let btnCrear = document.querySelector("#btnCrear");
let ingreso = document.getElementById("ingreso");
let cajas = document.querySelector(".cajas");

function crearCaja(cantidad) {
  let i = 0;
  for (i; i < cantidad; i++) {
    let caja = document.createElement("div");
    caja.classList.add("caja");
    cajas.appendChild(caja);
  }
}

btnCrear.addEventListener("click", () => {
  let cantidad = Number(ingreso.value);
  crearCaja(cantidad);
});
