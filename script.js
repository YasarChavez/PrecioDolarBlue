const url = "https://api.bluelytics.com.ar/v2/latest";

function getPrecio() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showPrecios() {
  getPrecio().then((data) => {
    console.log(data);
    var fechaActual = new Date();
    var fecha = new Date(data.last_update);
    //console.log(fecha);
    console.log(fechaActual.toLocaleTimeString());
    document.getElementById("datos").innerHTML = `
        <h2>Dólar Azul, guiño guiño 😉</h2>
        <h3>Venta: $${data.blue.value_sell} <br>
        Compra: $${data.blue.value_buy} <br>
        Promedio: $${data.blue.value_avg} <br>
        </h3>
        <h5>Última actualización:
        <br>
        ${fecha.getDate()}/${
      fecha.getMonth() + 1
    }/${fecha.getFullYear()}    ${fecha.toLocaleTimeString()}<br>
        </h5>
        <h6>Hora actual:<br> ${fechaActual.toLocaleTimeString()}</h6>
        `;
  });
}
function update() {
  setInterval(showPrecios, 1000);
}
update();
