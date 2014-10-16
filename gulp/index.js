var fs = require('fs'),
    onlyScripts = require('./util/scriptFilter'),
    tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

// Load Ignore util (needs to be global)
GLOBAL.ignore = require('./util/ignore');

// Load gulp requires
require('./util/require');

// Load global vars
require('./global');

// Load all the tasks
tasks.forEach(function(task) {
  require('./tasks/' + task);
});
