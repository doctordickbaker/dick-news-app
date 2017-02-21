var FeedParser = require('feedparser');
var request = require('request'); // for fetching the feed
var dis_title = document.getElementById("dis_title");
var dis_article = document.getElementById("dis_article");
var art_image = document.getElementById("article_image");
localStorage.setItem("userLocation",'-33.8683, 151.2086');
localStorage.setItem("feedURL","http://kotaku.com/vip.xml");
var article = ["FUCKFUCKFUCK"];


var req = request(localStorage.getItem("feedURL"));
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
    ///dis_title.innerHTML = item.title;
    ///dis_article.innerHTML = item.summary.slice(0,350);    
    ///article[state] = item;
    article.push(item);
    ///let currentArticle = item.link;
    ///dis_title.onclick = function(){
    ///window.open(currentArticle);
    //}
  }

});

console.log(article);
dis_title.innerHTML = article[1].title;