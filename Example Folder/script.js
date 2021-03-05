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
  
var note = ["A4", "C4", "D4", "E4", "G4"]; 

var i = Math.floor(Math.random() *4); 

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth(); 

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease(note[i], "8n");
console.log(note[i]); 


if(dryLevel==0){  
   var shift = new Tone.FrequencyShifter(100).toDestination(); 
   const cheby = new Tone.Chebyshev(50).toDestination();  
   const dist = new Tone.Distortion(2).toDestination(); 
   synth.connect(shift).connect(dist).connect(cheby);
 
} 
else if (dryLevel == 1) {
   var shift = new Tone.FrequencyShifter(22).toDestination(); 
   synth.connect(shift); 
      
} else {
   var shift = new Tone.FrequencyShifter(0).toDestination(); 
   synth.connect(shift);   
}; 

});


