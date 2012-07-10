var sys  = require('util'),
    exec = require('child_process').exec;

if (process.platform === 'darwin') {
  unpack('unzip phantomjs-1.6.0-macosx-static.zip');
} else if (process.platform === 'linux') {
  unpack('tar -xjf phantomjs-1.6.0-linux-x86_64-dynamic.tar.bz2');
}

function unpack(unzipCommand) {
  var command = [
    'cd phantomjs',
    'rm -rf phantomjs-1.6.0',
    unzipCommand,
    'cd phantomjs-1.6.0/bin',
    'mv phantomjs phantomjs-venus'
  ].join(' && ');

  exec(command);
}