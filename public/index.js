// index.js

function saveVideo() {
    var videoUrl = document.getElementById('videoUrl').value;
    
    if (videoUrl) {
      $.ajax({
        url: '/videos',
        method: 'POST',
        data: { url: videoUrl },
        success: function(response) {
          console.log('Vídeo salvo com sucesso!');
        },
        error: function(xhr, status, error) {
          console.error('Erro ao salvar o vídeo:', error);
        }
      });
    }
  }
  
  function redirectToPlayer() {
    window.location.href = '/player';
  } 