var commands = require('./commands.js');

process.stdout.write("prompt > ");

process.stdin.on('data', function(data) {
  var input = data.toString().trim();
  var simArgv = input.split(' ');
  var cmd = simArgv[0];

  if (cmd === 'pwd') {
    commands.pwd();
  } else if (cmd === 'date') {
    commands.date();
  } else if (cmd === 'ls') {
    commands.ls();
  } else if (cmd === 'echo') {
    commands.echo(simArgv.slice(1).join(' ').toString());
  } else if (cmd === 'cat') {
    commands.cat(simArgv[1].toString());
  } else if (cmd === 'head') {
    var lines = simArgv[2] || 5;
    commands.head(simArgv[1], lines);
  } else if (cmd === 'tail') {
    var lines = simArgv[2] || 5;
    commands.tail(simArgv[1].toString(), lines);
  } else if (cmd === 'sort') {
    commands.sort(simArgv[1].toString());
  } else if (cmd === 'wc') {
    commands.wc(simArgv[1]);
  } else if (cmd === 'uniq') {
    commands.uniq(simArgv[1]);
  }

  

  // process.stdout.write('\nprompt > ');

});
