const argv = require('yargs').argv;
const _ = require('lodash');
const notes = require('./notes.js');
const commands = ['add', 'remove', 'list', 'read'];

var command = argv._[0];

console.log("Command: " + command);

if (arrayContains(command, commands)) {
    switch (command) {
        case commands[0]:
            var note = notes.addNote(argv.title, argv.body);
            if (note) {
                console.log('Note created');
                console.log('---');
                console.log('Title: ' + note.title);
                console.log('Body: ' + note.body);
            } else {
                console.log('Note title taken! Title should be unique.')
            }
            break;
        default:
            console.log("Command unknown: " + argv._[0]);
            break;
    }
} else {
    console.log("Command unknown: " + argv._[0]);
}

/**
 * 
 * @param {string} needle 
 * @param {string} arrhaystack
 * @returns {boolean} If true => Array contains this string
 */
function arrayContains(needle, arrhaystack) {
    return (arrhaystack.indexOf(needle) > -1);
}