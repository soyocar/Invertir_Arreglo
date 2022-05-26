import "./styles.css";
let btnEnv = document.getElementById("enviar");
let indice: number;

btnEnv.addEventListener("click", () => {
  let dimensionArreglo: number = Number(
    prompt("Ingrese la dimensión del arreglo")
  );
  let arreglo: number[] = new Array(dimensionArreglo);
  let resultado: number[] = new Array(dimensionArreglo);
  function CargarArray(arraycarga: number[]) {
    for (indice = 0; indice < dimensionArreglo; indice++) {
      arraycarga[indice] = prompt(
        `Ingrese el valor de la posicion ${indice}: `
      );
    }
  }
  function InvertiArray(Invertir: number[], resultado: number[]) {
    let indice1: number = 0;
    for (indice = dimensionArreglo - 1; indice <= 0; indice--) {
      resultado[indice1] = Invertir[indice];
      indice1 += 1;
    }
  }

  CargarArray(arreglo);
  InvertiArray(arreglo, resultado);
  alert("El array invertido es " + resultado);
});
