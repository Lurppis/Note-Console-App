const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOption = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

const argv = require('yargs')
    .command('add', "Add a new note", {
        title: titleOption,
        body: bodyOption
    })
    .command('remove', 'Remove the note', {
        title: titleOption
    })
    .command('list', 'List all notes')
    .command('read', 'Read specific note', {
        title: titleOption
    })
    .help().argv;
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
        case commands[1]:
            var note = notes.removeNote(argv.title);
            if (note) {
                console.log(`Note "${note.title}" removed!`);
            } else {
                console.log(`Could not found "${argv.title}".`)
            }
            break;
        case commands[2]:
            var noteList = notes.getAllNotes();
            if (noteList.length > 0) {
                noteList.forEach(element => {
                    console.log(`Title: ${element.title}`);
                    console.log("---");
                });
            } else {
                console.log("List of notes is empty.")
            }
            break;
        case commands[3]:
            var note = notes.getNote(argv.title);
            if (note) {
                console.log(`Title: "${note.title}"`);
                console.log(`Body: ${note.body}`);
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