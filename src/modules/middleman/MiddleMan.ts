import WebMidi from 'webmidi';

export class MiddleMan {

  init():void {
    console.log("inputs: ", WebMidi.inputs);
    console.log("outputs: ", WebMidi.outputs);

    // Set up event listeners
    WebMidi.inputs.forEach((input) => {
      input.addListener("noteon", "all", event => {
        console.log("noteon: ", event);
      });

      input.addListener("controlchange", "all", (event) => {
        console.log("controlchange: ", event);
      });
    });
  }
}
