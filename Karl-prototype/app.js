console.clear();

const playBtn = document.getElementById('btn')


var slider = document.getElementById('myRange');
var output = document.getElementById('demo');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
const gain = new Tone.Gain(1);
gain.toMaster();
synth.connect(gain);

// synth.triggerAttackRelease('C4', '8n');

const notes = [
    'C4', 'D4', 'E4',
    'F4', 'G4', 'A4', 'B4'
];

var index = 0;

Tone.Transport.scheduleRepeat(time => {
    repeat(time)
}, '32n');

console.log(Tone.Transport.bpm.valu);
Tone.Transport.bpm.value = 120;

function repeat(time) {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '8n', time);
    index++;
}

playBtn.addEventListener('click', function() {
    
    Tone.Transport.start();
    
    setTimeout(() => {
        Tone.Transport.stop();
    }, 5000)
    
})