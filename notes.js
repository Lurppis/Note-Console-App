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