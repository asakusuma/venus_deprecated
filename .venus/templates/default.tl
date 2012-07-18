<!DOCTYPE html>
<html>
<head>
  <title> venus ♀ </title>
  <script type="text/javascript" src="/js/jquery-1.7.2.min.js"></script>
  <script type="text/javascript" src="/js/runner_client/venus.js"></script>
  <script type="text/javascript">
    window.venus.postUrl = '{postTestResultsUrl}';
  </script>

  {#scriptIncludes}
  <script type="text/javascript" src="{.}"></script>
  {/scriptIncludes}

  <script type="text/javascript">
    window.adaptor = new Adaptor();
  </script>

  <link rel="stylesheet" type="text/css" href="/css/app.css">
  <link rel="stylesheet" type="text/css" href="/css/bootstrap_btn.min.css">
</head>
<body>
  <div class="header">venus ♀</div>
  <div id="dashboard" class="dashboard">
    <!--Running test: {testId}-->
  </div>

  <script id="test-result-template" type="template">
    Hello, test number {testNumber}
  </script>

  <script>
    /*var templateMarkup = $('#test-result-template').html();*/
    /*dust.loadSource( dust.compile( templateMarkup, 'test-result' );*/


    /*dust.render('test-result', {}, function( err, html ) {*/
      /*$('#dashboard').html(html);*/
    /*});*/
  </script>

  <script src="{testcaseFile}"></script>
  <script type="text/javascript">
    window.adaptor.start();
  </script>
</body>
</html>
