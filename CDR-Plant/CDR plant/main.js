
document.getElementById("buttonn").addEventListener("click",

function(){
    
    
    //create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("A1", "8n");
    
    //*************/
    //const synth = new Tone.Synth().toDestination();
    //const now = Tone.now()
    // trigger the attack immediately
    //synth.triggerAttack("C4", now)
    // wait one second before triggering the release
    //synth.triggerRelease(now + 1)
}
); 

document.getElementById("button1").addEventListener("click",

function(){

    const synth = new Tone.Synth().toDestination();
    const now = Tone.now()
 
  synth.triggerAttack("C4", now)
    // wait one second before triggering the release
    synth.triggerRelease(now + 1)
}
); 

//