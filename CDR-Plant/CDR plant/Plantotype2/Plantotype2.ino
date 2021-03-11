/***********************************************************
Humidity sensor broke with waterspill. I ordered a new one. 
Also I burned 2 RGB LEDS. RIP.
This is how I "fixed it". 

~~THE FIX~~
With the numbers I gathered yesturday when it was working I fake a humidity sensor with lights and console data. This will print something in the console for the VS code.

HUMIDITY NUMBERS
Calathea's optimal watering was: 
DRY:  760 - 959           => IN THE CODE => 1
OPTIMAL: 960 - 1015       => IN THE CODE => 2
WET: 1001 - 1160          => IN THE CODE => 3

Smaller scale dirt in same pots was revealing: 
DRY 630
Good 635-825
Wet: 830-870

The LED's are just for me to see that it's working, the Serial Monitor will also log the number. The sound is what is important here.
Pretending that the button is the leaf until the proximity sensor arrives in my mailbox or I figure out an alternative.

Arduino is connected to 
3 LED lights (Red, Yellow & Green)
1 Peizo speaker (set to port 12, used in this case with built in tone arduino code)
4  220ohm resistances connected to Speaker & LEDS
1 button
1 10kohm resistance connected to the button.

~GND (top) for LED's Positive pin +
Resistance to LED's Negative pin -

GND and 5V (bottom) for button

The logic is built so sound can be played depending on the state.
***********************************************************/



//LED "humidity" setup
// Pin assignement
const int btnPin = 8;
const int GreenledPin = 9;
const int YellowledPin = 10;
const int RedledPin = 11;
long randomNumber = 0;

enum fcnMode {
 OFF,
 LED1,
 LED2,
 LED3,
 NBSTATE
}; // OFF = 0 and NBSTATE=7

int ledState1 = LOW, ledState2 = LOW, ledState3 = LOW; // ledState used to set the LED
unsigned long buttonState = 0;
int funcState = 0;
unsigned long currentMillis1, currentMillis2, currentMillis3;// will store current time
unsigned long previousMillis1, previousMillis2, previousMillis3; // will store last time LED was updated
const long interval1 = 100; // interval at which to blink (milliseconds)
const long interval2 = 300;
const long interval3 = 500;


void setup() {
 Serial.begin(9600); // initialize serial port
 pinMode(btnPin, INPUT_PULLUP);
 pinMode(GreenledPin, OUTPUT);
 pinMode(YellowledPin, OUTPUT);
 pinMode(RedledPin, OUTPUT);
  setMode();
}
void loop() {
 buttonPressed();
 setMode();
}
void buttonPressed() {
 buttonState = pulseIn(btnPin, HIGH, 1000000);
 if (buttonState > 50) {
 
 //delay to avoid double positive LED, aka skipping lights etc) 
  delay (10);
  randomNumber = random(1, 4);
  
   Serial.print("Button state n: ");
   Serial.println(funcState);
      
 if (randomNumber < 2 && randomNumber > 0) //YELLOW
 {
   tone (12,600, 600);
 }
 else if (randomNumber > 2 && randomNumber > 0) //RED
 {
   tone (12,100, 600);
 }
 else if ( randomNumber != 0 ) // GREEN
 {
      tone (12,3000, 300);
 }
 }
}
void setMode() {
 // All Off
 digitalWrite(GreenledPin, LOW);
 digitalWrite(YellowledPin, LOW);
 digitalWrite(RedledPin, LOW);
 Serial.print("Function : ");
 Serial.println(randomNumber);

 if (randomNumber < 2 && randomNumber > 0) //YELLOW
 {
     digitalWrite(YellowledPin, HIGH);
 }
 else if (randomNumber > 2 && randomNumber > 0) //RED
 {
     digitalWrite(RedledPin, HIGH);
 }
 else if ( randomNumber != 0 ) //601 999 GREEN
 {
     digitalWrite(GreenledPin, HIGH);
 }
}
