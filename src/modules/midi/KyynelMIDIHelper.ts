
export class KyynelMIDIHelper {
  static requestMIDIAccess(): Promise<WebMidi.MIDIAccess> {
    if (window.navigator && 'function' === typeof window.navigator.requestMIDIAccess) {
      return window.navigator.requestMIDIAccess();
    } else {
      throw 'No Web MIDI support';
    }
  }
}



