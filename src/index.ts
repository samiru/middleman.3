import { html, render } from 'lit-html';
import { KyynelMIDIInput, KyynelMIDIOutput } from './modules/midi/KyynelMIDIPort';
import { KyynelMIDIHelper } from './modules/midi/KyynelMIDIHelper';
import WebMidi from 'webmidi';

//const inputs: KyynelMIDIInput[] = new Array();
//const outputs: KyynelMIDIOutput[] = new Array();

WebMidi.enable((error: any) => {
  if (error) {
    console.error("WebMidi could not be enabled: ", error);
  }
  else {
    console.log("WebMidi enabled!");
    console.log("inputs: ", WebMidi.inputs);
    console.log("outputs: ", WebMidi.outputs);

    WebMidi.inputs.forEach((input) => {
      input.addListener("noteon", "all", event => {
        console.log("noteon: ", event);
      });

      input.addListener("controlchange", "all", (event) => {
        console.log("controlchange: ", event);
      });
    });

  }
}, true);

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
