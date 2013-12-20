function PairTimer() {
  this.startTime = 900;
  this.setStartTime = function(time) {
    this.startTime = time;
  }
  this.clock = $('.clock').FlipClock({
      countdown: true,
      clockFace: 'MinuteCounter',
      autoStart: false
  });
}
