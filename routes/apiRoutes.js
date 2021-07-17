// Importing the necessary database file, Node file system module, and NPM package for the id
const fs = require('fs');
const db = require('../db/db.json');
const id = require('uuid');

module.exports = (app) => {

    // Gets the JSON data from the db 
    app.get('/api/notes', (req, res) => res.json(db));

    // Posts JSON data to the db
    app.post('/api/notes', (req, res) => {
        db.push(req.body);
    });

    app.delete('/api/notes/:id'), (req, res) => {

    }

};