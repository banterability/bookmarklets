(function(){
  try{
    var t = window.performance.timing;
    alert('Time to First Byte: ' + (t.responseStart - t.fetchStart) + ' ms');
  } catch(e) {
    return alert('Timing data not available');
  }
})();
