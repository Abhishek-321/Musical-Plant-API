# Musical Plant API
 This is the musical plant device and API for it

# Overview of our Idea
 It is a plant that people are more drawn to come back to. We do this by making a plant play music when it is gently tapped. The device will be able to convey the information of amout of water through sound. The shift in sound will convey this information. 

 # Why is the project Useful?
Our J5 soil sensor hybrid will allow us test from a distance, (users will not see lights, or colors) and ask users, with a plant in front of them if they understand which sound means what and explore how users would actually touch their plants. 
  
  In theory, our design is to encourage users to water their plants a somewhat training practice for them with Calathea.
Calathea plants are the hardest to kill. The only reason they die is because they're not getting enough water. Our users are primarily bad waterers. Overwatering & Underwatering bad plant habits. 
  
  
 # Getting started
 > To get started with the project, you need to download the folders and open index.html in a webbrowser. If further steps are required, it will be presented in each README.md. If you want to tweak the project, use a visual studio code to alter the code. 
 
 
 
 > ARDUINO BUILD:
Arduino is connected to 
3 LED lights (Red, Yellow & Green)
1 Peizo speaker (set to port 12, used in this case with built in tone arduino code)
4  220ohm resistances connected to Speaker & LEDS
**What goes where?**
GreenledPin = 9
YellowledPin = 10
RedledPin = 11
Peizo = 12

Connect +positive LED pins to 220 ohm resistors (yes, one per LED, trust me.)
Connect pins 9 - 11 to LED +positive pin (longest pin) 
Connect pin 12 to +positive peizo pin
Connect ~GND to -Negative side of breadboard .
Connect all LED -negative pin (short pin) to ~GND
Connect GND to other -negative side of breadboard 
Connect resistor to -negative to -negative peizo pin. 

SET ARDUINO TO READ *STANDARD FIRMATA PLUS* 

****
 

All the works here are based on getting started examples from https://tonejs.github.io/. as well as Arduino guides, and Adafruit Soil sensor API libraries. 


 # This repository is maintained and cotributions are made by following people. 
 1. Abhishek Giri   
 2. Clarisse Duryee
 3. Karl-Fredrik Magawa Hagman

 
