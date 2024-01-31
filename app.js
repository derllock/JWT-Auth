const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

app.listen(3000,()=>console.log("Server is running on port 3000"));
// database connection
const dbURI = 'mongodb://127.0.0.1:27017/jwtAuthentication';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .catch((err) => console.log(err));
mongoose.connection.on('connected', () => {
  console.log('Yo! MongoDB database connection established successfully');
});
mongoose.connection.on('disconnected', () => {
  console.log('Oops! MongoDB database disconnected ');
});
// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));