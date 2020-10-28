const peripheral = require('./ble/peripheral');
const Service = require('./ble/Service');
const gpio = require('./gpio')

function startPeripheral({readData, writeData}) {
  const service = new Service(readData, writeData);

  peripheral.start("Haloween Lights", [service])
}

function stopPeripheral() {
  peripheral.stop()
}


function readData() {
  const promise = new Promise((resolve, reject) => {
    resolve({message: "looking good"})
  })
  
  return promise
}

const writeData = (data) => {
  // console.log("Writing data", data);
  gpio.setDutyCycle(data.value)
}

startPeripheral({readData, writeData})


