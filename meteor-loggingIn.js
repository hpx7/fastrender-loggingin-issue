if (Meteor.isClient) {
  Tracker.autorun(function () {
    console.log(Meteor.userId(), Meteor.loggingIn());
  });
}

if (Meteor.isServer) {
  Accounts.validateLoginAttempt(function () {
    Meteor._sleepForMs(2000);
    return true;
  });
}
