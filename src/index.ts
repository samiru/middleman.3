import { html, render } from 'lit-html';
import { KyynelMIDIPort } from './modules/KyynelMIDIPort/KyynelMIDIPort';

function requestMIDIAccess() {
  if (window.navigator && 'function' === typeof window.navigator.requestMIDIAccess) {
    return window.navigator.requestMIDIAccess();
  } else {
    throw 'No Web MIDI support';
  }
}

const inputs: KyynelMIDIPort[] = new Array();
const outputs: KyynelMIDIPort[] = new Array();

const midi = requestMIDIAccess()
  .then((access: WebMidi.MIDIAccess) => {
    // Inputs
    access.inputs.forEach(port => {
      inputs.push(new KyynelMIDIPort(port));
    });

    // Outputs
    access.outputs.forEach(port => {
      outputs.push(new KyynelMIDIPort(port));
    });
  });

const root = document.getElementById('root') as HTMLElement;

/*
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
