const playBtn = document.getElementById('btn')

var slider = document.getElementById('myRange');
var output = document.getElementById('demo');
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
}


const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();

const loopA = new Tone.Loop(time => {
    synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);

const loopB = new Tone.Loop(time => {
    synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("8n");

playBtn.addEventListener('click', play)  



let stop = Boolean(false)

function play(){
    updateBPM()

    if(stop==false){
        Tone.Transport.start()
        console.log(stop);
        Tone.Transport.bpm.value = updateBPM;
        stop = true
    }
    else{
        Tone.Transport.stop()
    }
    
}
function updateBPM(){
    while (stop == false) {
        let bpms = slider.value;
        console.log(slider.value);
        return bpms
    }
    
} 