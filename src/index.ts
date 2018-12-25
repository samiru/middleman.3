import { html, render } from 'lit-html';
import { KyynelMIDIInput, KyynelMIDIOutput } from './modules/midi/KyynelMIDIPort';
import { KyynelMIDIHelper } from './modules/midi/KyynelMIDIHelper';

const inputs: KyynelMIDIInput[] = new Array();
const outputs: KyynelMIDIOutput[] = new Array();

const midi = KyynelMIDIHelper.requestMIDIAccess()
  .then((access: WebMidi.MIDIAccess) => {
    // Inputs
    access.inputs.forEach(port => {
      inputs.push(new KyynelMIDIInput(port));
    });

    // Outputs
    access.outputs.forEach(port => {
      outputs.push(new KyynelMIDIOutput(port));
    });
  });

midi.then(() => console.log("inputs: ", inputs));
midi.then(() => console.log("outputs: ", outputs));

/*
const root = document.getElementById('root') as HTMLElement;

function renderTime(time: Date) {
  return html`
    <p>It\'s: ${time.toISOString()}</p>
  `;
}

function renderHello(time: Date) {
  return html`
    <h1>Hello, Sami!</h1>
    ${renderTime(time)}
  `;
}

setInterval(() => {
  const view = renderHello(new Date());
  render(view, root);
}, 1000);
*/
