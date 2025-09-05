const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connection to MongoDB 
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/augmented-archeology', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Augmented Archaeology API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});