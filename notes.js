const fs = require('fs');
const fileName = 'notes-data.json';

/**
 * @description     Fetching notes from file.
 * @returns {Array}
 */
var fetchNotes = () => {
    var notes = [];
    if (fs.existsSync(fileName)) {
        try {
            var notesString = fs.readFileSync('notes-data.json');
            notes = JSON.parse(notesString);
            return notes;
        } catch (error) {
            return notes;
        }
    } else {
        return notes;
    }
};

/**
 * 
 * @param {string} title 
 * @param {string} body 
 * 
 * @description     Method simply add unique string to json file.
 * @return {object}
 */
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    notes = fetchNotes();
    var duplicateNots = notes.filter((note) => note.title === title);

    if (duplicateNots.length === 0) {
        notes.push(note);
        saveNots(notes);
        return note;
    }
};

/**
 * 
 * @param {string} title 
 * 
 * 
 * @description Method simply search for note in json file and remove if exist.
 */
var removeNote = (title) => {
    var notes = fetchNotes();
    var titleIndexOf = notes.findIndex(i => i.title === title);
    if (titleIndexOf > -1) {
        var note = notes[titleIndexOf];
        notes.splice(titleIndexOf, 1);
        console.log(notes);
        saveNots(notes);
        return note;
    }
};

module.exports = {
    addNote,
    removeNote
};