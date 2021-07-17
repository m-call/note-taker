// Importing the necessary database file, Node file system module, and NPM package for the id
const fs = require('fs');
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    // Gets the JSON data from the db 
    app.get('/api/notes', (req, res) => res.json(db));

    // Posts JSON data to the db when a new note is created
    app.post('/api/notes', (req, res) => {

        // Creates a new note in object form assigning an id, title, and text
        let newNote = {
            id: uuidv4(),
            title: req.body.title,
            text: req.body.text
        };

        // Adds the newly created note object to the db.json file
        db.push(newNote);

        // Turns the JSON data from the db.json file into a string so it can be used in the fs.writeFile method
        let notes = JSON.stringify(db);

        // Overwrites the db.json file with the newly added note(s)
        fs.writeFile(__dirname + '/../db/db.json', notes, (err) => {
            if (err) throw err;
        })
        res.end();

    });

    // Removes JSON data from the db when a corresponding note is deleted
    // app.delete('/api/notes/:id'), (req, res) => {
    //     for (i = 0; i < db.length; i++) {
    //         if (db[i].id == req.params.id) {
    //             console.log('test');
    //         }
    //     }
    // }

};