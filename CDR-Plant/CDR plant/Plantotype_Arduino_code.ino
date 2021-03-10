//import libraries: Adafruit & pitches

#include "Adafruit_seesaw.h"
#include "pitches.h"

Adafruit_seesaw ss;

// Array of Notes to play from Pitches "ta-dah"
int melody[] = {

  NOTE_C4, NOTE_G3, NOTE_G3, NOTE_A3, NOTE_G3, 0, NOTE_B3, NOTE_C4
};

// note durations: 4 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {

  4, 8, 8, 4, 4, 4, 4, 4
};

//Adafruit "humidity" sensor setup (soil density)
void setup() {
 
  Serial.begin(115200);

  Serial.println("seesaw Soil Sensor example!");
  
  if (!ss.begin(0x36)) {
    Serial.println("ERROR! seesaw not found");
    while(1);
  } else {
    Serial.print("seesaw started! version: ");
    Serial.println(ss.getVersion(), HEX);
  }
}

//loops the readings of the humidity sensor with the capread.
void loop() {
  float tempC = ss.getTemp();
  uint16_t capread = ss.touchRead(0);

  Serial.print("Temperature: "); Serial.print(tempC); Serial.println("*C");
  Serial.print("Capacitive: "); Serial.println(capread);
 
//Threshhold for proximity touch (set data accordingly. Use Serial Monitor to see the default numbers, then touch the plant for that number
//GOOD STATUS WHEN TOUCHED
  if  (capread > 1015)
  {
     playSong (); //plays song we created
  } 

  if  (capread > 500)
  {
   //  playSong2 (); //plays song we created
  } 
  delay(100);
}

//Pitches setup that calulates the notes etc. replace with Tones.js in VS J5 build
void playSong () {

  // iterate over the notes of the melody:

  for (int thisNote = 0; thisNote < 8; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.

    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.

    int noteDuration = 1000 / noteDurations[thisNote];

   
    // tone (port on arduino, (in this case 11 connects to the + speaker) note, duration)
    tone(11, melody[thisNote], noteDuration);


    // to distinguish the notes, set a minimum time between them.

    // the note's duration + 30% seems to work well:

    int pauseBetweenNotes = noteDuration * 1.30;

    delay(pauseBetweenNotes);

    // stop the tone playing:

    noTone(11);

  }
  
}
