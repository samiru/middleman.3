
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
    throw new Error("Method not implemented.");
  }

  constructor(port: WebMidi.MIDIPort) {
    Object.assign(this, port);
    this.id = port.id;
    this.manufacturer = port.manufacturer;
    this.name = port.name;
    this.type = port.type;
    this.version = port.version;
    this.state = port.state;
    this.connection = port.connection;
  }
}

export class KyynelMIDIInput extends KyynelMIDIPort implements WebMidi.MIDIInput {
  constructor(port: WebMidi.MIDIInput) {
    super(port);
    port.onmidimessage = this.onmidimessage;
  }
  onmidimessage(message: WebMidi.MIDIMessageEvent): void {
    console.log(message.data);
  }
}

export class KyynelMIDIOutput extends KyynelMIDIPort implements WebMidi.MIDIOutput {
  constructor(port: WebMidi.MIDIOutput) {
    super(port);
    port.send = this.send;
    port.clear = this.clear;
  }
  send(data: number[] | Uint8Array, timestamp?: number): void {
    throw new Error("Method not implemented");
  }
  clear(): void {
   throw new Error("Method not implemented");
  }
}
