// player.js

var player;
var videos = [];

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    host: 'https://www.youtube.com',
    playerVars: {
      'origin': window.location.origin
    }
  });
}

function onPlayerReady(event) {
  loadVideosFromDatabase(function() {
    if (videos.length > 0) {
      playVideo(0);
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    if (videos.length > 0) {
      setTimeout(function() {
        playVideo(0);
      }, 5000); // Aguarda 5 segundos antes de reproduzir o próximo vídeo
    }
  }
}

function loadVideosFromDatabase() {
  $.ajax({
    url: '/videos',
    method: 'GET',
    success: function (data) {
      videos = JSON.parse(data);
      currentVideoIndex = 0;
      playVideo();
    },
    error: function (error) {
      console.error('Erro ao carregar os vídeos do banco de dados:', error);
    }
  });
}

function playVideo(videoId) {
  const youtubePlayer = document.getElementById('youtube-player');
  youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
}


// Inicializa o reprodutor de vídeos do YouTube
onYouTubeIframeAPIReady();
