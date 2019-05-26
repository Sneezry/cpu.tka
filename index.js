const cpuStat = require('cpu-stat');

exports.main = function(webview) {
  setInterval(() => {
    cpuStat.usagePercent(function(err, percent) {
      if (!err) {
        webview.send(percent);
      }
    });
  }, 1000);
}