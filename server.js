// Importing necessary Express frameworks for the server
const express = require('express');

// Setting up express as an app variable and setting the port for the server
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Importing the apiRoutes and htmlRoutes files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));