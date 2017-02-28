(function(){
  var channelId = document.querySelector('meta[itemprop="channelId"]').content;
  window.location.assign(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
}();

/* Compiled:
javascript:(function()%7Bvar channelId %3D document.querySelector('meta%5Bitemprop%3D"channelId"%5D').content%3Bwindow.location.assign(%60https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D%24%7BchannelId%7D%60)%7D)()
*/
