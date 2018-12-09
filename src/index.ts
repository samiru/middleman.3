import { html, render } from 'lit-html';

function requestMIDIAccess() {
  if (window.navigator && 'function' === typeof window.navigator.requestMIDIAccess) {
    return window.navigator.requestMIDIAccess();
  } else {
    throw 'No Web MIDI support';
  }
}

class KyynelMIDIPort implements WebMidi.MIDIPort {
  id:string;
  manufacturer?: string | undefined;
  name?: string | undefined;
  type: WebMidi.MIDIPortType;
  version?: string | undefined;
  state: WebMidi.MIDIPortDeviceState;
  connection: WebMidi.MIDIPortConnectionState;

  onstatechange(e: WebMidi.MIDIConnectionEvent): void {
    throw new Error("Method not implemented.");
  }
  open(): Promise<WebMidi.MIDIPort> {
    throw new Error("Method not implemented.");
  }
  close(): Promise<WebMidi.MIDIPort> {
    throw new Error("Method not implemented.");
  }
  addEventListener(type: string, listener: EventListener | EventListenerObject | null, options?: boolean | AddEventListenerOptions | undefined): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  removeEventListener(type: string, callback: EventListener | EventListenerObject | null, options?: boolean | EventListenerOptions | undefined): void {
    throw new Error("Method not implemented.");
  }
  onmidimessage(message: WebMidi.MIDIMessageEvent) {
    console.log("message: ", message);
  }

  constructor(port: WebMidi.MIDIPort) {
    Object.assign(this, port);
    this.id = port.id;
    this.type = port.type;
    this.state = port.state;
    this.connection = port.connection;
  }
}

const inputs: KyynelMIDIPort[] = new Array();
const outputs: KyynelMIDIPort[] = new Array();

const connect = requestMIDIAccess()
  .then((access: WebMidi.MIDIAccess) => {
    access.inputs.forEach(input => {
      inputs.push(new KyynelMIDIPort(input));
    });
    access.outputs.forEach(output => {
      outputs.push(new KyynelMIDIPort(output));
    });

    console.log("inputs: ", inputs);
    console.log("outputs: ", outputs);
  });

console.log(connect);

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
