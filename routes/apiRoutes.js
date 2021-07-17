// Importing the necessary database file and Node file system module
const fs = require('fs');
const db = require('../db/db.json');

module.exports = (app) => {

    // Gets the JSON data from the db 
    app.get('/api/notes', (req, res) => res.json(db));

    // Posts JSON data to the db
    app.post('/api/notes'), (req, res) => db.push(req.body);

};