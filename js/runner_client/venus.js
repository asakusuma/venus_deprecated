(function(window) {
  window.venus = new Venus();

  function Venus() {}

  Venus.prototype.done = function(results) {
  	console.log(results);

  	var dashboard = $('#dashboard');
  	dashboard.append('<div class="header2">statistics</div>');

  	var stats = '<p>' + 
  								'passes: ' + results.passes + '<br />' +
  								'failures: ' + results.failures + '<br />' +
  								'percent passed: ' + results.percent + '%' + '<br />' +
  								'completion time: ' + results.milliseconds + 's' +
  							'</p>';
  	dashboard.append(stats);

  	dashboard.append('<div class="header2">breakdown</div>');
  	$.each(results.suites, function(index, suite) {
  		dashboard.append('<div class="test">' + suite.title + ' - ' + 
  										 '<a class="link" href="' + suite.url + '">rerun</a>' + '</div>');
      if(suite.test)
      {
    		$.each(suite.test, function(index, test) {
    			var test;

    			if(test.status == 'passed') {
    				test = '<p>' + test.title + ' ' + '<span class="green">✔</span>' + '</p>';
    			} else {
    				test = '<p class="red">' + test.title + ' ✖' + '</p>';
    			}
    			dashboard.append(test);
    		});
      }

      dashboard.append('<div class="space"></div>');
		});

  };
}(window));
