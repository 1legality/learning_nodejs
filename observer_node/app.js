var Emitter = require('events');
var eventsConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventsConfig.GREET, function() {
    console.log('Someone somewhere said hello');
});

var greet = function() {
    console.log('hello!');
    emtr.emit(eventsConfig.GREET);
}

greet();
