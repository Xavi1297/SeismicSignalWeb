var clientId = "ws" + Math.random();
// Create a client instance
var client = new Paho.MQTT.Client("broker.emqx.io", 8083, clientId);

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({ onSuccess: onConnect });
ValorAceleracionS1x = -1;
ValorAceleracionS1y = -1;
ValorAceleracionS1z = -1;

ValorAceleracionS2x = -1;
ValorAceleracionS2y = -1;
ValorAceleracionS2z = -1;

ValorAceleracionS3x = -1;
ValorAceleracionS3y = -1;
ValorAceleracionS3z = -1;

var OffsetS1x = 2;
var OffsetS1y = 2;
var OffsetS1z = 2;

var OffsetS2x = 2;
var OffsetS2y = 2;
var OffsetS2z = 2;

var OffsetS3x = 2;
var OffsetS3y = 2;
var OffsetS3z = 2;

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("Conectado MQTT-WebSocket");
  client.subscribe("/edificio/sensor1");
  client.subscribe("/edificio/sensor2");
  client.subscribe("/edificio/sensor3");

}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("Conexión perdida:" + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log(message.destinationName + ": " + message.payloadString);
  // called when a message arrives

  if (message.destinationName == '/edificio/sensor1') {
    // document.getElementById("ValorA").textContent =  message.payloadString;
    var DatosS1 = message.payloadString.split('/');
    //ValorAceleracion = parseFloat(message.payloadString);
    ValorAceleracionS1x = DatosS1[0];
    ValorAceleracionS1y = DatosS1[1];
    ValorAceleracionS1z = DatosS1[2];
    ValorBateriaS1=DatosS1[3];
    document.getElementById("BatS1").innerHTML = "Batería: "+ValorBateriaS1+" %"
    if (parseFloat(OffsetS1x) <= parseFloat(ValorAceleracionS1x)) {
      notify("1", "x",ValorAceleracionS1x);
    }
    if (parseFloat(OffsetS1y) <= parseFloat(ValorAceleracionS1y)) {
      notify("1", "y",ValorAceleracionS1y);
    }
    if (parseFloat(OffsetS1z) <= parseFloat(ValorAceleracionS1z)) {
      notify("1", "z",ValorAceleracionS1z);
    }



  }
  if (message.destinationName == '/edificio/sensor2') {
    // document.getElementById("ValorA").textContent =  message.payloadString;
    var DatosS2 = message.payloadString.split('/');
    //ValorAceleracion = parseFloat(message.payloadString);
    ValorAceleracionS2x = DatosS2[0];
    ValorAceleracionS2y = DatosS2[1];
    ValorAceleracionS2z = DatosS2[2];
    ValorBateriaS2=DatosS2[3];
    document.getElementById("BatS2").innerHTML = "Batería: "+ValorBateriaS2+" %"
    if (parseFloat(OffsetS2x) <= parseFloat(ValorAceleracionS2x)) {
      notify("2", "x",ValorAceleracionS2x);
    }
    if (parseFloat(OffsetS2y) <= parseFloat(ValorAceleracionS2y)) {
      notify("2", "y",ValorAceleracionS2y);
    }
    if (parseFloat(OffsetS2z) <= parseFloat(ValorAceleracionS2z)) {
      notify("2", "z",ValorAceleracionS2z);
    }
  }
  if (message.destinationName == '/edificio/sensor3') {
    // document.getElementById("ValorA").textContent =  message.payloadString;
    var DatosS3 = message.payloadString.split('/');
    //ValorAceleracion = parseFloat(message.payloadString);
    ValorAceleracionS3x = DatosS3[0];
    ValorAceleracionS3y = DatosS3[1];
    ValorAceleracionS3z = DatosS3[2];
    ValorBateriaS3=DatosS3[3];
    document.getElementById("BatS3").innerHTML = "Batería: "+ValorBateriaS3+" %"
    if (parseFloat(OffsetS3x) <= parseFloat(ValorAceleracionS3x)) {
      notify("3", "x",ValorAceleracionS3x);
    }
    if (parseFloat(OffsetS3y) <= parseFloat(ValorAceleracionS3y)) {
      notify("3", "y",ValorAceleracionS3y);
    }
    if (parseFloat(OffsetS3z) <= parseFloat(ValorAceleracionS3z)) {
      notify("3", "z",ValorAceleracionS3z);
    }

  }



}

function actualizar() {

  var offs1x = document.getElementById('OffS1x').value;
  var offs1y = document.getElementById('OffS1y').value;
  var offs1z = document.getElementById('OffS1z').value;

  var offs2x = document.getElementById('OffS2x').value;
  var offs2y = document.getElementById('OffS2y').value;
  var offs2z = document.getElementById('OffS2z').value;

  var offs3x = document.getElementById('OffS3x').value;
  var offs3y = document.getElementById('OffS3y').value;
  var offs3z = document.getElementById('OffS3z').value;

  //Sensor1
  if (offs1x!="") {
    OffsetS1x = offs1x;
    document.getElementById("LS1x").innerHTML = "Eje X: "+OffsetS1x+" [m/s2]"
  }
  if (offs1y!="") {
    OffsetS1y = offs1y;
    document.getElementById("LS1y").innerHTML = "Eje Y: "+OffsetS1y+" [m/s2]"
  }
  if (offs1z!="") {
    OffsetS1z = offs1z;
    document.getElementById("LS1z").innerHTML = "Eje Z: "+OffsetS1z+" [m/s2]"
  }
  //Sensor2
  if (offs2x!="") {
    OffsetS2x = offs2x;
    document.getElementById("LS2x").innerHTML = "Eje X: "+OffsetS2x+" [m/s2]"
  }
  if (offs2y!="") {
    OffsetS2y = offs2y;
    document.getElementById("LS2y").innerHTML = "Eje Y: "+OffsetS2y+" [m/s2]"
  }
  if (offs2z!="") {
    OffsetS2z = offs2z;
    document.getElementById("LS2z").innerHTML = "Eje Z: "+OffsetS2z+" [m/s2]"
  }
  //Sensor3
  if (offs3x!="") {
    OffsetS3x = offs3x;
    document.getElementById("LS3x").innerHTML = "Eje X: "+OffsetS3x+" [m/s2]"
  }
  if (offs3y!="") {
    OffsetS3y = offs3y;
    document.getElementById("LS3y").innerHTML = "Eje Y: "+OffsetS3y+" [m/s2]"
  }
  if (offs3z!="") {
    OffsetS3z = offs3z;
    document.getElementById("LS3z").innerHTML = "Eje Z: "+OffsetS3z+" [m/s2]"
  }
}


function notify(Sensor, Eje, Valor) {
  if (!("Notification" in window)) {
    alert("Tu navegador no soporta notificaciones");
  } else if (Notification.permission === "granted") {
    var notification = new Notification("¡¡Alerta!!", {
      icon: "img/alerta.png",
      body: "Sensor " + Sensor + " Eje " + Eje + ": " + Valor + " [m/s2]"

    });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function(permission) {
      if (Notification.permission === "granted") {
        var notification = new Notification("¡¡Alerta!!", {
          icon: "img/alerta.png",
          body: "Sensor " + Sensor + " Eje " + Eje + ": " + Valor + " [m/s2]"

        });
        //Aumentar que cuando le de clic se rediriga ala pagina web<-----------------
      }
    });
  }

}
