console.clear();

const playBtn = document.getElementById('btn')


const synth = new Tone.Synth();
synth.oscillator.type = 'sine';
const gain = new Tone.Gain(0.1);
gain.toMaster();
synth.connect(gain);

// synth.triggerAttackRelease('C4', '8n');

const notes = [
    'C4', 'E4', 'G4',
    'C5', 'E5', 'G5'
];

var index = 0;

Tone.Transport.scheduleRepeat(time => {
    repeat(time)
}, '8n');

console.log(Tone.Transport.bpm.valu);
Tone.Transport.bpm.value = 90;

function repeat(time) {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '8n', time);
    index++;
}

playBtn.addEventListener('click', function() {
    
    Tone.Transport.start();
    
    setTimeout(() => {
        Tone.Transport.stop();
    }, 1000)
    
})