// Importing necessary frameworks and libraries
const express = require('express');
const fs = require('fs');

// Setting up express as an app variable and setting the port for the server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));