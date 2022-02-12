var mqtt = require("mqtt");
const Data = require("./src/models/Data");

//initialize the MQTT client
var client = mqtt.connect("mqtt://test.mosquitto.org");

//setup the callbacks
client.on("connect", function () {
  console.log("Connected");
});

client.on("error", function (error) {
  console.log(error);
});

client.on("message", async (topic, message) => {
  //Called each time a message is received
  console.log("Received message:", topic, message.toString());
  dev = await Data.create({
    name: message.toString(),
  });
  console.log("saved sata: ", dev);
});

// subscribe to topic 'my/test/topic'
client.subscribe("PPESTACAO/LUMI");

// publish message 'Hello' to topic 'my/test/topic'
// client.publish("my/test/topic", "Hello");
