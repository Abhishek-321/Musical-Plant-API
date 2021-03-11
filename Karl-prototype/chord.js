//Grab play and stop btn add eventlistner
const playBtn2 = document.getElementById('play-btn2')
playBtn2.addEventListener('click', play2)


// set up slider value
var slider2 = document.getElementById('myRange2')
var output2 = document.getElementById('demo2')
output2.innerHTML = slider2.value;
slider2.oninput = function() {
}

function play2(){
    slider2.oninput = function (){
        
        var val = this.value;
        output.innerHTML = this.value;
        if(val == 80){
            const gainNode = new Tone.Gain(0).toDestination();
            const osc = new Tone.Oscillator('C5').connect(gainNode).start();
            const osc2 = new Tone.Oscillator('E5').connect(gainNode).start();
            const osc3 = new Tone.Oscillator('G5').connect(gainNode).start();
            gainNode.gain.rampTo(0.3, 0.1);
            gainNode.gain.rampTo(0, 2, "+0.5");
        }
        else if(val == 50){
            const gainNode = new Tone.Gain(0).toDestination();
            const osc = new Tone.Oscillator('C5').connect(gainNode).start();
            const osc2 = new Tone.Oscillator('E5').connect(gainNode).start();
            gainNode.gain.rampTo(0.3, 0.1);
            gainNode.gain.rampTo(0, 2, "+0.5");    
        }
        else if(val == 2){
            const gainNode = new Tone.Gain(0).toDestination();
            const osc = new Tone.Oscillator('C5').connect(gainNode).start();
            gainNode.gain.rampTo(0.3, 0.1);
            gainNode.gain.rampTo(0, 2, "+0.5");
        }
    }
}