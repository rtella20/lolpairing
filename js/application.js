function init () {
  window.timer = new PairTimer();
  window.timer.setStartTime(600);

  var intervalCallback = function () {
    if (window.timer.getTime() < 500) {
      var titleTimer=window.setInterval(function() {
        document.title = document.title == "Timer" ? "STOP PAIRING" : "Timer";
      }, 1500);
      $('body').css("background","#fff url('img/background/hypnotoad.png') no-repeat top left");
    }
  }

  window.timer.setCallback('interval',intervalCallback);

  var random_background = 1 + Math.floor(Math.random() * 5);
  $('body').css("background","#fff url('img/background/"+random_background+".jpg') no-repeat top left");
  $('body').css("background-size", 'cover');

  $('#play_pause').click( function () {
    if (window.timer.isStarted) {
      window.timer.stop();
      $('#play_pause span').toggleClass('glyphicon-pause glyphicon-play');
    }
    else {
      window.timer.start();
      $('#play_pause span').toggleClass('glyphicon-play glyphicon-pause');
    }
  });

  $('#reset').click( function () { window.timer.stop(); window.timer.reset(); });
}

$(document).ready(function(){
  init();
});
