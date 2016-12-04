var page = require('webpage').create(),
  system = require('system'),
  t, url;

if (system.args.length === 1) {
  console.log("Usage: loadspeed.js <URL>");
  phantom.exit();
}

t = window.performance.now();
url = system.args[1];
page.open(url, function(status) {
  if (status !== 'success') {
    cnosole.log('Fail to load the resource.');
  } else {
    // Calculate the elapse time of the request 
    var delta = window.performance.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec, ' + 'equals to' + t/1000 + 'seconds.');
  }
  phantom.exit();
});