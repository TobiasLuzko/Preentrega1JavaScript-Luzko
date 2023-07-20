function calcular() {
    let monto = parseInt(document.getElementById("monto").value);
    let tasa = parseFloat(document.getElementById("tasa").value);
    let plazo = parseInt(document.getElementById("plazo").value);

    let intereses = (monto * tasa) / 100;
    let total = monto + intereses;
    let cuotaMensual = total / plazo;

    let resultado = "El total a pagar es: $" + total.toFixed(2) + "<br>";
    resultado += "La cuota mensual es: $" + cuotaMensual.toFixed(2);

    document.getElementById("resultado").innerHTML = resultado;
  }