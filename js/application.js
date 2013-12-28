function init () {
  var session = window.pairSession = new PairSession();

  var random_background = 1 + Math.floor(Math.random() * 5);
  $('body').css("background","#fff url('img/background/"+random_background+".jpg') no-repeat top left");
  $('body').css("background-size", 'cover');

  $('#play_pause').click( function () {
    if (window.pairSession.timer.isStarted) {
      window.pairSession.timer.stop();
    }
    else {
      window.pairSession.timer.start();
    }
  });

  var timerStopCallback = function() {
    if(window.titleTimer) {
      $('body').css("background","#fff url('img/background/"+random_background+".jpg') no-repeat top left");
      $('body').css("background-size", 'cover');
      window.clearInterval(window.titleTimer);
      window.setTimeout(document.getElementById('playMe').pause,1);
    }
    if(window.pairSession.timer.isStarted) {
      $('#play_pause span').toggleClass('glyphicon-play glyphicon-pause');
    }
  }

  var timerStartCallback = function () {
    if(!window.pairSession.timer.isStarted) {
      $('#play_pause span').toggleClass('glyphicon-play glyphicon-pause');
    }
  }

  var timerResetCallback = function () {}

  session.setTimerCallback('stop', timerStopCallback);
  session.setTimerCallback('start', timerStartCallback);
  session.setTimerCallback('reset', timerResetCallback);

  $('#reset').click( function () { session.timer.stop(); session.timer.reset(); });
  $('#username1-field').val(session.username1);
  $('#username2-field').val(session.username2);

  $('#username-form').change( function () {
    window.pairSession.username1 = $('#username1-field').val();
    window.pairSession.username1 = $('#username2-field').val();
  });

  $('#edit').click( function () {
    var newTime = prompt("Change the Length",session.startTime);
    window.pairSession.startTime = newTime;
    window.pairSession.timer.stop();
    window.pairSession.timer.setStartTime(newTime);
  });
}

$(document).ready(function(){
  init();
});
