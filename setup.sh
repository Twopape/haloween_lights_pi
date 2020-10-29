#!/bin/bash

# Node

wget -O - https://raw.githubusercontent.com/meech-ward/NodeJs-Raspberry-Pi/master/Install-Node.sh | sudo bash;
sudo node-install -v 8;

## Pigpio

sudo apt-get install pigpio -y
npm install pigpio

## bleno

sudo apt-get install bluetooth bluez libbluetooth-dev libudev-dev -y
npm install bleno


# sudo vi /etc/systemd/system/haloween.service
# sudo systemctl enable haloween.service
# sudo systemctl start haloween.service