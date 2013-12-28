function PairTimer() {
  window.pairTimer = this;

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
    this.clock.setTime(this.startTime -1);
    this.clock.start();
    this.isStarted = true;
  }

  this.stop = function() {
    this.clock.stop();
    this.isStarted = false;
  }

  this.reset = function() {
    this.clock.stop();
    this.clock.reset();
    this.setStartTime(this.startTime);
  }

  this.getRemainingSeconds = function() {
    return this.clock.getTime().time;
  }

  this.setCallback = function(callbackname, callback) {
    window.pairTimer.clock.timer.callbacks[callbackname] = callback;
  }
}
