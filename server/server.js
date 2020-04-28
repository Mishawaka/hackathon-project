const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://misha:VolunteersWebSite123456@ds263656.mlab.com:63656/volunteers-website`,
  async (err) => await console.log('connected to db')
);

const app = express();

app.get('/', (req, res) => {
  res.send('HI, MAAARK');
});

app.listen(8000, () => console.log('hi'));
