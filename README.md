Arduino LED Messaging App
===============================
A multi-user chat-like application that sends user typed messages to an arduino and MAX7219 LED Matrix display module.

####Libraries and frameworks used
* node.js
* express.io
* johnny-five
* socket.io


##Setting Up the Arduino and MAX7219 Matrix

###Components you'll need:
  * Arduino Uno board
  * 5 jumper wires (female/male)
  * MAX7219 Red Dot Matrix Display Module
  * Arduino USB cable

![Alt text](https://cloud.githubusercontent.com/assets/6833837/5483412/634e4080-863f-11e4-860d-e28800a4d49c.jpg)


###Connecting the Components

1. LED matrix connections to arduino:
  * VCC to 5V
  * GND to GND
  * DIN to Digital 2
  * CS to Digital 4
  * CLK to Digital 3

  ![Alt text](https://cloud.githubusercontent.com/assets/6833837/5483417/741f95b2-863f-11e4-9db2-3f834c352550.jpg)
  ![Alt text](https://cloud.githubusercontent.com/assets/6833837/5483413/6be773ec-863f-11e4-8484-44e0983e2c5b.jpg)

2. Connect the USB cable from the arduino to your computer.
3. Download the Arduino software if you have not already: http://arduino.cc/en/Main/Software
4. Open up the Arduino IDE and under the **Tools** menu make sure the correct Board and Serial Port are selected.
5. Install the "StandardFirmata" sketch in order to be able to use the Arduino IDE. **File > Examples > Firmata > StandardFirmata**


##Install and run the app

1. Make sure Node.JS is installed on your computer: http://nodejs.org
2. Clone or download this repo.
3. In terminal, cd into the directory.
4. Run the command `npm install` to install dependencies.
5. Run the command `node index.js` to start the server.
6. Open your browser and go to http://localhost:3000

To see the application live, visit https://arduino-led-writing.herokuapp.com


