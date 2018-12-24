
export class KyynelMIDIPort implements WebMidi.MIDIPort {
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

  constructor(public port: WebMidi.MIDIPort) {
    Object.assign(this, port);
    this.id = port.id;
    this.type = port.type;
    this.state = port.state;
    this.connection = port.connection;
  }
}
