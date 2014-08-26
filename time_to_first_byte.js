(function(){
  try{
    var t = window.performance.timing;
    alert('Time to First Byte: ' + (t.responseStart - t.fetchStart) + ' ms');
  } catch(e) {
    return alert('Timing data not available');
  }
})();

/* Compiled:
javascript:(function(){try{var%20t=window.performance.timing;alert('Time%20to%20First%20Byte:%20'+(t.responseStart-t.fetchStart)+'%20ms')}catch(e){return%20alert('Timing%20data%20not%20available')}})();void(0);
*/
