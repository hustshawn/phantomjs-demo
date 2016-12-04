var page = require('webpage').create();
page.open('http://www.douban.com', function(status) {
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