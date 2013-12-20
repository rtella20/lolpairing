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

});
