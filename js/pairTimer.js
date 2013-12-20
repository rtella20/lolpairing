function PairTimer() {
  this.startTime = 900;
  this.isStarted = false;
  this.clock = $('.clock').FlipClock({
      countdown: true,
      clockFace: 'MinuteCounter',
      autoStart: false
  });

  this.setStartTime = function(time) {
    this.startTime = time;
    this.clock.setTime(this.startTime);
  }

  this.setStartTime(this.startTime);

  this.start = function() {
    this.clock.start();
    this.isStarted = true;
  }
  this.stop = function() {
    this.clock.stop();
    this.isStarted = false;
  }
  this.reset = function() {
    this.stop();
    this.setStartTime(this.startTime);
  }
  this.getRemainingTime =
  this.setCallback = function(callbackname, callback) {
    this.clock.callbacks.callbackname = callback;
  }
}
