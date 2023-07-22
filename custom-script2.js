document.addEventListener('DOMContentLoaded', function() {
  var context = new (window.AudioContext || window.webkitAudioContext)();
  var source;
  var audioBuffer;

  function loadAudio(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      var audioData = request.response;

      context.decodeAudioData(audioData, function(buffer) {
        audioBuffer = buffer;
        playAudio();
      });
    };

    request.send();
  }

  function playAudio() {
    source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = true;
    source.connect(context.destination);
    source.start(0);
  }

  loadAudio('audios/nightcall.mp3');
});

