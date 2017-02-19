var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed
var dis_title = document.getElementById("dis_title");
var dis_article = document.getElementById("dis_article");
var dis_day = document.getElementsByClassName("dis_day");
var dis_date = document.getElementsByClassName("dis_date");
var dis_temp = document.getElementsByClassName("dis_temp");

///////  Quick time stuff
dis_day.innerHTML = "HAHAHAHAHA";

var req = request('http://feeds.reuters.com/reuters/topNews?format=xml')
var feedparser = new FeedParser();  /// options 

req.on('error', function (error) {
  // handle any request errors
});

req.on('response', function (res) {
  var stream = this; // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  }
  else {
    stream.pipe(feedparser);
  }
});

feedparser.on('error', function (error) {
  // always handle errors
});

feedparser.on('readable', function () {
  // This is where the action is!
  var stream = this; // `this` is `feedparser`, which is a stream
  var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  var item;

  while (item = stream.read()) {
    ///console.log(item.title);
    dis_title.innerHTML = item.title;
    dis_article.innerHTML = item.summary;
  }
});
