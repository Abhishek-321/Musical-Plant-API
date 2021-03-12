var dryLevel = 0;

//get all the buttons
document.getElementById("drybutton").addEventListener("click", function(){
   dryLevel = 0;
   //display the dryness level
document.getElementById("display").innerHTML = "The Plant is very Dry";  
});

document.getElementById("goodbutton").addEventListener("click", function(){
   dryLevel = 1; 
   //display the dryness level
document.getElementById("display").innerHTML = "The plant is perfect atm"; 
});






//creates a random note 
document.getElementById("myBtn").addEventListener("click", function() {

  
//sad chords in the key of D
const dm = ["D2", "F2", "A3"];
const gm = ["G2", "Bb3", "D3"]; 
const am = ["A2", "C2", "E2"]; 
const minor = [dm, gm, am]; 

//choose randomly a chord to be played
var randomMinor = minor[Math.floor(Math.random()*3)];

//happy chords in the key of D
const D = ["D4", "F#4", "A4"]; 
const a7 = ["A4", "c#4", "E4", "G4"]; 
const G = ["G4", "B5", "D5"];
const e7 = ["E4", "G#4", "B5", "D5"];
var happy = [D, a7, G, e7]; 
var randomMajor = happy[Math.floor(Math.random()*4)]; 


if(dryLevel==0){  
   

   const synth = new Tone.PolySynth();
   const vol = new Tone.Volume(-12).toDestination();
   
   // set the attributes across all the voices using 'set'
   //synth.set({ detune: -1200 });
   // play a chord
   synth.triggerAttackRelease(randomMinor, 0.5).connect(vol);


           
/*else if (dryLevel == 1) {
   
   const synth = new Tone.PolySynth( ).toDestination();
   // set the attributes across all the voices using 'set'
   //synth.set({ detune: -1200 });
   // play a chord
   synth.triggerAttackRelease(["A4", "C4", "E4"], 0.5);
  */ 
} else {
   
   const synth = new Tone.PolySynth()
   const vol = new Tone.Volume(-20).toDestination();
   
   // set the attributes across all the voices using 'set'
   //synth.set({ detune: -1200 });
   // play a chord
   synth.triggerAttackRelease(randomMajor, 0.5).connect(vol);

}; 

});




