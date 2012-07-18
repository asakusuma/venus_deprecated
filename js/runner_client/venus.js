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
    var stack = [];
    stack.push(results);
    var traverse = stack.pop();
    while(traverse)
    {
    	$.each(traverse.suites, function(index, suite) {
        dashboard.append('<div class="test">' + suite.title + ' - ' + 
                         '<a class="link" href="' + suite.url + '">rerun</a>' + '</div>');
        stack.push(suite);
        dashboard.append('<div class="space"></div>');
  		});

      traverse = stack.pop();
    }

  };
}(window));


/**

// The code below prints out tests associated with suites,
// and it can be plugged in once the suite traversal is done correctly.

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
**/


