var fs = require('fs');

exports = module.exports = {};

exports.pwd = function(file) {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
};

exports.date = function(file) {
  var date = new Date();
  process.stdout.write(date.toString());
  process.stdout.write('\nprompt > ');
};


exports.ls = function(file) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    });
    process.stdout.write('\nprompt > ');
  });
};

exports.echo = function(file) {
  process.stdout.write(file);
};

exports.cat = function(file) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    process.stdout.write(file);
    process.stdout.write('prompt > ');
  });
};

exports.head = function(file, lines) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var cabeza = file.toString().split('\n').slice(0,lines).join('\n');
    process.stdout.write(cabeza + '\n');
    process.stdout.write('prompt > ');
  });

};

exports.tail = function(file, lines) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var talon = file.toString().split('\n').slice(-lines).join('\n');
    process.stdout.write(talon + '\n');
    process.stdout.write('prompt > ');
  });

};

exports.sort = function(file) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var sorted = file.toString().split('\n').sort();
    process.stdout.write(sorted.join('\n'));
    return sorted;
  });
};

exports.wc = function(file) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var lines = file.toString().split('\n').length.toString();
    process.stdout.write(lines);
  });
};

exports.uniq = function(file) {

    // var sortedLines = exports.sort(file);
    // process.stdout.write(sortedLines.join(" "));

    var sorted = exports.sort(file);

    fs.readFile(file, function(err, sorted) {
      if (err) throw err;
      var lines = sorted.toString().split('\n');
      process.stdout.write(lines.filter(function(line, i) {
        return lines[i-1] !== line;
      }).join('\n'));
    });
  };


// process.stdout.write('\nprompt > ');
