const url = "https://api.bluelytics.com.ar/v2/latest";

function getPrecio() {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data
        });
}

function showPrecios(){
    getPrecio().then((data) => {
        console.log(data);
        var fecha = new Date(data.last_update);
        document.getElementById("datos").innerHTML +=`
        <h2>Dólar Azul Guiño Guiño 😉</h2>
        <h3>Venta: $${data.blue.value_sell} <br>
        Compra: $${data.blue.value_buy} <br>
        Promedio: $${data.blue.value_avg} <br>
        </h3>
        <h5>Ultima actualización:<br>
        ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}<br>
        ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}<br>
        </h5>
        `;
    });
}

showPrecios();