// Importing the path package to use its methods for pathing
const path = require('path');

module.exports = (app) => {

    // Setting the HTML routes for the server
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // If no matching route is found default to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

};