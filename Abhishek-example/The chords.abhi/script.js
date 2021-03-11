var dryLevel = 0;

//get all the buttons
document.getElementById("drybutton").addEventListener("click", function(){
   dryLevel = 0;
   //display the dryness level
document.getElementById("display").innerHTML = "The Plant is very Dry";  
});
document.getElementById("midbutton").addEventListener("click", function(){
   dryLevel = 1; 
   //display the dryness level
document.getElementById("display").innerHTML = "The plant is little dry. But u be the judge"; 
});
document.getElementById("goodbutton").addEventListener("click", function(){
   dryLevel = 2; 
   //display the dryness level
document.getElementById("display").innerHTML = "The plant is perfect atm"; 
});






//creates a random note 
document.getElementById("myBtn").addEventListener("click", function() {

  
//sad chords in the key of D
const dm = ["D2", "F2", "A2"];
const gm = ["G2", "Bb2", "D2"]; 
const am = ["A2", "C2", "E2"]; 
const minor = [dm, gm, am]; 

//choose randomly a chord to be played
var randomMinor = minor[Math.floor(Math.random()*3)];

//happy chords in the key of D
const cs2 = ["C4", "D4", "G4"]; 
const hmm = ["F4", "G4", "C4"]; 
var happy = [cs2, hmm]; 
var randomMajor = happy[Math.floor(Math.random()*2)]; 


if(dryLevel==0){  
   

   const synth = new Tone.PolySynth().toDestination();
   // set the attributes across all the voices using 'set'
   //synth.set({ detune: -1200 });
   // play a chord
   synth.triggerAttackRelease(randomMinor, 0.5);

} 

else if (dryLevel == 1) {
   
   const synth = new Tone.PolySynth().toDestination();
   // set the attributes across all the voices using 'set'
   //synth.set({ detune: -1200 });
   // play a chord
   synth.triggerAttackRelease(["A4", "C4", "E4"], 0.5);
   
} else {
   
   const synth = new Tone.PolySynth().toDestination();
   // set the attributes across all the voices using 'set'
   //synth.set({ detune: -1200 });
   // play a chord
   synth.triggerAttackRelease(randomMajor, 0.5);

}; 

});




