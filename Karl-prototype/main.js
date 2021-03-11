//Grab play and stop btn add eventlistner
const playBtn = document.getElementById('play-btn')
const stopBtn = document.getElementById('stop-btn')
playBtn.addEventListener('click', play)

// set up slider value
var slider = document.getElementById('myRange')
var output = document.getElementById('demo')
output.innerHTML = slider.value;
slider.oninput = function() {
}

const synthA = new Tone.FMSynth().toDestination();
const synthB = new Tone.AMSynth().toDestination();

const loopA = new Tone.Loop(time => {
    synthA.triggerAttackRelease("C2", "8n", time);
}, "4n").start(0);

const loopB = new Tone.Loop(time => {
    synthB.triggerAttackRelease("C4", "8n", time);
}, "4n").start("16n");

function play() {
    Tone.Transport.start()
    Tone.Transport.bpm.value = 1;


    slide.oninput = function (){
        var bpms = this.value;
        Tone.Transport.bpm.value = bpms;
        output.innerHTML = this.value;
        console.log(bpms);
    }
    console.log('play');
}








// const vol = new Tone.Volume(-1).toDestination();
// const osc = new Tone.Oscillator().connect(vol).start();