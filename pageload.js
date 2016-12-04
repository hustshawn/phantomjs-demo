var page = require('webpage').create();
var system = require('system');
// the actual ize of the headless browser
page.viewportSize = {width: 1024, height: 768};
// the cliprect is the portion of the page your are takeing snapshot of
page.clipRect = { top: 0, left: 0, width: 1024, height:768 };

var url = system.args[1] ? system.args[1] : 'http://www.douban.com';
page.open(url, function(status) {
  console.log('Status:', status);
  if (status === 'success') {
    page.render('page_snapshot.png');
  }
  else {
    console.log("FAILED SOMEHOW");
  }
  // else if(status === '')
  phantom.exit();
})