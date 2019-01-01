import { html, render } from 'lit-html';
import WebMidi from 'webmidi';
import { MiddleMan } from './modules/middleman/MiddleMan';

const middleman:MiddleMan = new MiddleMan();

const midi = new Promise((resolve, reject) => {
  WebMidi.enable((error: any) => {
    if (error) {
      reject(error);
    }
    else {
      resolve();
    }
  }, true);
});

midi.catch((error) => {
  console.error("MIDI initialization failed!", error);
});

midi.then(() => {
  console.log("MIDI initialization succeeded!");
  middleman.init();
});

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
