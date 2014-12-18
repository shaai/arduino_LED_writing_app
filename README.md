Writing messages to an arduino
===============================
A multi-user chat-like application that sends typed messages to an arduino. The arduino prints the messages at a very high speed through an LED matrix. Wave the LED screen quickly to see the letters, or better yet, take pictures with a camera set to slow shutter speed and see the messages printed out in the air.


#Install

1. Make sure Node.JS is installed on your computer: http://nodejs.org

Clone (or download and unzip) this repository. Then in terminal:
  > cd arduino-led-writing-app


#Setting Up the Arduino

Components you'll need:
  * Arduino Uno board
  * 5 jumper wires (female/male)
  * MAX7219 Red Dot Matrix Display Module
  * Arduino USB cable

image of components: ![Alt text](https://cloud.githubusercontent.com/assets/6833837/5483412/634e4080-863f-11e4-860d-e28800a4d49c.jpg)


###Connecting the Components

  LED matrix connections to arduino:
    * VCC to 5V
    * GND to GND
    * DIN to Digital 2
    * CS to Digital 4
    * CLK to Digital 3

![Alt text](https://cloud.githubusercontent.com/assets/6833837/5483417/741f95b2-863f-11e4-9db2-3f834c352550.jpg)
![Alt text](https://cloud.githubusercontent.com/assets/6833837/5483413/6be773ec-863f-11e4-8484-44e0983e2c5b.jpg)
