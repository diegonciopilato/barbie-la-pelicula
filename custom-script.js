document.addEventListener('DOMContentLoaded', function() {
  var backgroundAudio = document.getElementById('backgroundAudio');
  var videoPlayer = document.getElementById('videoPlayer');

  videoPlayer.addEventListener('play', function() {
    backgroundAudio.pause();
  });

  videoPlayer.addEventListener('pause', function() {
    backgroundAudio.play();
  });
});

