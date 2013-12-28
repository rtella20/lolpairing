function PairSession(username1, username2, startTime) {
  /* Set Defaults */
	this.username1 = typeof username1 !== 'undefined' ? username1 : "User 1";
  this.username2 = typeof username2 !== 'undefined' ? username2 : "User 2";
  this.startTime = typeof startTime !== 'undefined' ? startTime : 600;
  this.driver = this.username1;
  this.timer = window.sessionTimer = new PairTimer();

  this.timerCallback = function () {
    if (window.sessionTimer.getRemainingSeconds() <= 10) {
    	document.getElementById('playMe').play();
    	if (!window.titleTimer) {
	      window.titleTimer = window.setInterval(function() {
	        document.title = document.title == "Timer" ? "STOP PAIRING" : "Timer";
	      }, 1500);
	    }
      $('body').css("background","#fff url('img/background/hypnotoad.png') no-repeat top left");
    }
  }

  this.isDriving = function (username) {
  	return this.driver === username;
  }

  this.switchDrivers = function() {
  	this.driver = this.isDriving(this.username1) ? this.username2 : this.username1;
  }

  this.setTimerCallback = function(callbackname, callback) {
    window.sessionTimer.setCallback(callbackname, callback);
  }

  this.timer.setStartTime(this.startTime);
  this.timer.setCallback('interval',this.timerCallback);
}