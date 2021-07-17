// Importing necessary frameworks and libraries
const express = require('express');
const path = require('path');
const fs = require('fs');

// Setting up express as an app variable and setting the port for the server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Setting the HTML routes for the server
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'))
});

  // If no matching route is found default to home
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));