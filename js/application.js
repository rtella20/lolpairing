function init () {
  var startTime = 900;
  var isRunning = false;

  var random_background = 1 + Math.floor(Math.random() * 5);
  $('body').css("background","#fff url('img/background/"+random_background+".jpg') no-repeat top left");
  $('body').css("background-size", 'cover');

  var custom_callbacks = new Object();
  custom_callbacks.interval = function() {
    if (clock.getTime() < 890) {
      //alert('test');
      document.title = 'CHANGE PAIRS';
      document.title = 'CHANGE PAIRS!';
      $('body').css("background","#fff url('img/background/hypnotoad.png') no-repeat top left");
    }
  }

  var clock = $('.clock').FlipClock({
      countdown: true,
      clockFace: 'MinuteCounter',
      callbacks: custom_callbacks,
      autoStart: false
  });

  clock.setTime(startTime);

  $('#play_pause').click( function () {
    if (isRunning) {
      clock.stop();
      isRunning = false;
      $('#play_pause span').toggleClass('glyphicon-pause glyphicon-play');
    }
    else {
      clock.start();
      isRunning = true;
      $('#play_pause span').toggleClass('glyphicon-play glyphicon-pause');
    }
  });

  $('#reset').click( function () { clock.stop(); clock.setTime(900); });
}

$(document).ready(function(){
  init();
});
