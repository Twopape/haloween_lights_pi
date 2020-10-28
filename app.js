const peripheral = require('./ble/peripheral');
const Service = require('./ble/Service');


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
  if (data.ssid === 'hello') {
    console.log("HI");
  }
  console.log("Writing data", data);
}

startPeripheral({readData, writeData})


