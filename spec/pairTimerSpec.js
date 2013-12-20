describe("PairTimer", function() {

  beforeEach(function() {
    timer = new PairTimer();
  });

  it("should be", function() {
    expect(timer).toBeDefined();
  });

  it("should have a default time of 900 seconds", function() {
    expect(timer.startTime).toEqual(900);
  });

  it("should be able to change the start time", function() {
    timer.setStartTime(500);
    expect(timer.startTime).toEqual(500);
  });

  it("should have a flipclock", function() {
    expect(timer.clock).toBeDefined();
  });

  it("should know if the clock has been started", function() {
    timer.start();
    expect(timer.isStarted).toBeTruthy();
  });

  it("should know if the clock has been stopped", function() {
    timer.start();
    timer.stop();
    expect(timer.isStarted).toBeFalsy();
  });

  it("should be able to change its callbacks", function() {
    var feedback = 0;
    var wrapperFunction = function(result) { return function() { result = 1;}}
    var myFunction = wrapperFunction(feedback);
    timer.setCallback('start',myFunction);
    timer.start();
    setTimeout(function() {
      expect(feedback).toEqual('1');
    },0);
  });

  it("should be able tio know the clock's time", function() {
    timer.setStartTime(30);
    expect(timer.getRemainingTime()).toEqual(30);
  });

  // it("should be able to reset itself", function() {
  //   timer.clock.setTime(1);
  //   timer.reset();
  //   expect(timer.clock.getTime()).toEqual('900');
  // });
});
