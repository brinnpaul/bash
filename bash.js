var commands = require('./commands.js');
var request = require('request');

process.stdout.write("prompt > ");

var done = function(output) {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdin.on('data', function(data) {
  var input = data.toString().trim();
  var simArgv = input.split(' ');
  var cmd = simArgv[0];

  if (cmd === 'pwd') {
    commands.pwd(null, done);
  } else if (cmd === 'date') {
    commands.date(null, done);
  } else if (cmd === 'ls') {
    commands.ls(null, done);
  } else if (cmd === 'echo') {
    commands.echo(simArgv.slice(1).join(' ').toString(), done);

  } else if (cmd === 'cat') {
    commands.cat(simArgv[1], done);
  } else if (cmd === 'head') {
    var lines = simArgv[2] || 5;
    commands.head(simArgv[1], lines, done);
  } else if (cmd === 'tail') {
    var lines = simArgv[2] || 5;
    commands.tail(simArgv[1], lines, done);
  } else if (cmd === 'sort') {
    commands.sort(simArgv[1], done);
  } else if (cmd === 'wc') {
    commands.wc(simArgv[1]);
  } else if (cmd === 'uniq') {
    commands.uniq(simArgv[1]);
  } else if (cmd === 'requestinfo') {
    console.log(request);
  } else if (cmd === 'curl') {
    commands.curl(simArgv[1]);
  }



  // process.stdout.write('\nprompt > ');

});
