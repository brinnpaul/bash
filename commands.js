var fs = require('fs');
var request = require('request');

commands = module.exports = {

pwd: function(file, done) {
  var output = process.cwd();
  done(output);
},

date: function(file, done) {
  var date = new Date();
  done(date.toString());
},

ls: function(file, done) {
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    var listed = '';
    files.forEach(function(file) {
      listed += file.toString() + "\n";
    });
    done(listed);
  });
},

echo: function(file, done) {
  done(file);
},

cat: function(file, done) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    done(file);
  });
},

head: function(file, lines) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var cabeza = file.toString().split('\n').slice(0,lines).join('\n');
    process.stdout.write(cabeza + '\n');
    process.stdout.write('prompt > ');
  });

},

tail: function(file, lines) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var talon = file.toString().split('\n').slice(-lines).join('\n');
    process.stdout.write(talon + '\n');
    process.stdout.write('prompt > ');
  });

},

sort: function(file) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var sorted = file.toString().split('\n').sort().join('\n');
    process.stdout.write(sorted);
    return sorted;
  });
},

wc: function(file) {
  fs.readFile(file, function(err, file) {
    if (err) throw err;
    var lines = file.toString().split('\n').length.toString();
    process.stdout.write(lines);
  });
},

uniq: function(file, sorted) {

    // var sortedLines = sort(file);
    // process.stdout.write(sortedLines.join(" "));

    fs.readFile(file, function(err, file) {
      if (err) throw err;
      var lines = file.toString().split('\n');
      for (var i=1; i<lines.length; i++) {
        if (lines[i-1] === lines[i]) {
          lines.splice(i,1);
          i--;
        }
      }
      process.stdout.write(lines.join('\n'));
    });
  },

curl: function(file) {
  request.get({ url: file }, function (err, res) {
    process.stdout.write(res.body);
  });
}

}

// process.stdout.write('\nprompt > ');
