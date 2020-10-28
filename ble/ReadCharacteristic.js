const bleno = require('@abandonware/bleno');
const util = require('util');
const uuids = require('./uuids');

/**
 * 
 * @param {A function that returns a promise that resolves to an array of network objects that look like {bssid, signalLevel, ssid}} networks 
 */
function ReadCharacteristic(readData) {
  bleno.Characteristic.call(this, {
    uuid: uuids.readCharacteristic,
    properties: ['read', 'indicate']
  });

  this.readData = readData;
}

module.exports = ReadCharacteristic;

util.inherits(ReadCharacteristic, bleno.Characteristic);

// ReadCharacteristic.prototype.onReadRequest = function(offset, callback) {
//   if (offset) {
//     callback(this.RESULT_ATTR_NOT_LONG, null);
//     return;
//   }

//   Promise.resolve(this.readData())
//   .then((data) => {
//     data.forEach(data => {
//       const string = JSON.stringify(data);
//       const buffer = Buffer.from(string, 'utf8');
//       console.log("Sent data to central", buffer, string);
//       callback(this.RESULT_SUCCESS, buffer);
//     })
//   })
//   .catch((error) => {
//     callback(this.RESULT_UNLIKELY_ERROR, Buffer.from("Couldn't read data", 'utf8'));
//     throw error;
//   });
// };

ReadCharacteristic.prototype.onSubscribe = function(maxValueSize, callback) {

  Promise.resolve(this.readData()) 
  .then((data) => {
    data.forEach(data => {
      const string = JSON.stringify(data);
      const buffer = Buffer.from(string, 'utf8');
      console.log("Sent data to central", buffer, string);
      // callback(this.RESULT_SUCCESS, buffer);
      callback(buffer);
    })
  })
  .catch((error) => {
    callback(this.RESULT_UNLIKELY_ERROR, Buffer.from("Couldn't read data", 'utf8'));
    throw error;
  });
};

ReadCharacteristic.prototype.onIndicate = function() {
  console.log("onIndicate")
}

module.exports = ReadCharacteristic;