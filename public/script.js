let mediaRecorder, recordedBlobs, sourceBuffer;

let $liveStreamVideo = $('video#live-stream');
let $recordedVideo = $('video#recorded');

let $recordButton = $('button#record');
let $playButton = $('button#play');


$recordButton.click(e => {
  if ($recordButton.text() === 'Start Recording') {
    startRecording();
    $recordButton.text('Stop Recording');
    $playButton.attr('disabled', true);
  } else {
    stopRecording();
    $recordButton.text('Start Recording');
    $playButton.attr('disabled', false);
  }
});

$playButton.click(e => {
  var superBuffer = new Blob(recordedBlobs);
  $recordedVideo.attr('src', window.URL.createObjectURL(superBuffer));
});


navigator.mediaDevices.getUserMedia({ audio: true, video: true })
  .then(stream => {
    window.stream = stream;
    $liveStreamVideo.attr('src', window.URL.createObjectURL(stream));
  })
  .catch(error => {
    console.log('navigator.getUserMedia error: ', error);
  });


const handleDataAvailable = (event) => {
  if (event.data && event.data.size > 0) {
    recordedBlobs.push(event.data);
  }
}

const startRecording = () => {
  recordedBlobs = [];
  mediaRecorder = new MediaRecorder(window.stream);
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
}

const stopRecording = () => {
  mediaRecorder.stop();
}