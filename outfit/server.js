const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

/* outfit API route */
const outfitRoutes = require('./routes/outfitroutes');
app.use('/api/outfits', outfitRoutes);

/* handling 404 */
// app.get('*', function(req, res) {
//   res.status(404).send({message: 'Oops! Not found.'});
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});


