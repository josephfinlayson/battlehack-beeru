var app = require('express')();

var categories = require('./routes/categories'),
    styles = require('./routes/styles'),
    beers = require('./routes/beers')

app.use('/categories', categories);
app.use('/styles', styles);
app.use('/', beers);

module.exports = app;