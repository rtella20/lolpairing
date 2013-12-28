describe("PairSession", function() {

  beforeEach(function() {
    session = new PairSession();
  });

  it("should be", function() {
    expect(session).toBeDefined();
  });

  it("should have a timer", function() {
    expect(session.timer).toBeDefined();
  });

  it("should have default username1", function() {
    expect(session.username1).toEqual("User 1");
  });

  it("should be able to change the default username1 in constructor", function() {
    session = new PairSession("username");
    expect(session.username1).toEqual("username");
  });

  it("should know if a user is driving", function() {
    expect(session.isDriving(session.username1)).toBeTruthy();
  });

  it("should be able to switch drivers", function() {
    session.switchDrivers();
    expect(session.isDriving(session.username2)).toBeTruthy();
  });

  it("should be able to change its clocks callbacks", function() {
    var feedback = 0;
    var wrapperFunction = function(result) { return function() { result = 1;}}
    var myFunction = wrapperFunction(feedback);
    session.setTimerCallback('start',myFunction);
    session.timer.start();
    setTimeout(function() {
      expect(feedback).toEqual('1');
    },0);
  })
});
