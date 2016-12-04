var page = require('webpage').create(),
  system = require('system');

if (system.args.length === 1) {
  console.log("Usage: loadspeed.js <URL>");
  phantom.exit();
}

var url = system.args[1];

page.onConsoleMessage = function(msg) {
  console.log("Console message:", msg);
};

page.open(url, function(status) {
  if (status !== 'success') {
    console.log("Failed to load the resource, exit somehow");
    phantom.exit();
  }
  var title = page.evaluate(function() {
    return document.title;
  });
  console.log("Requested page: ", url);
  console.log("Page titile: ", title);
  phantom.exit();
});