const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connection to MongoDB 
mongoose.connect('mongodb://localhost:27017/augmented-archeology', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden.'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Willkommen bei Augmented Archeology API!');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});