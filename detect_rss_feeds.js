(function(){
  console.group('Detected Feeds:');
  Array.from(document.querySelectorAll('link[rel=alternate]')).forEach(function(link, index){
    console.log((index + 1) + ': ' + link.href);
  });
  console.groupEnd();
})();

/* Compiled:
javascript:(function()%7B(function()%7Bconsole.group('Detected%20Feeds%3A')%3BArray.from(document.querySelectorAll('link%5Brel%3Dalternate%5D')).forEach(function(link%2C%20index)%7Bconsole.log((index%20%2B%201)%20%2B%20'%3A%20'%20%2B%20link.href)%3B%7D)%3Bconsole.groupEnd()%3B%7D)()%7D)()
*/
