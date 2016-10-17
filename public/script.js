// Setting some global variables we'll access throughout the code
let recorder, recordedBlobs, currentMediaStream;

let $liveStreamVideo = $('video#live-stream');
let $recordedVideo = $('video#recorded');

let $recordButton = $('button#record');
let $playButton = $('button#play');


$recordButton.click(e => {
  /** 
   * Function should: 
   * 1.  Check if we are recording or not
   * 2a. If we are recording:
   *        1. stop recording
   *        2. remove the disabled attribute from the play button
   *        3. change the record button text back to 'Start Recording'
   * 2b. If we are not recording:
   *        1. start recording
   *        2. add the disabled attribute to the play button
   *        3. change the record button text to 'Stop Recording'
   */
});

$playButton.click(e => {
  /** 
   * Function should: 
   * 1. Create a new blob from our recordedBlobs array
   * 2. Set the source of our recorded video element to the new blob
   */
});


const handleDataAvailable = (event) => {
  /** 
   * Function should: 
   * 1. Check if `event.data` exists
   * 2. Check if `event.data.size` is greater than 0
   * 3. If both are true, push `event.data` into our recordedBlobs array
   */
}

const startRecording = () => {
  /** 
   * Function should: 
   * 1. Reset the value of recordedBlobs to an empty array
   * 2. Reset the recorder value to a new instance of MediaRecorder,
   *    passing in our currentMediaStream object as the first argument
   * 3. Handle the `ondatavailable` event with the handleDataAvailable function
   * 4. Start the recorder
   */
}

const stopRecording = () => {
  /** 
   * Function should: 
   * 1. Stop the recorder
   */
}


/** 
 * Make the initial function call to getUserMedia()
 * Pass in both audio and video as options
 * The success handler should:
 *     1. Set the currentMediaStream variable to the returned mediaStream
 *     2. Set the source of our live stream video element to the mediaStream
 * The error handler should:
 *    1. Log the error to the console
 * /