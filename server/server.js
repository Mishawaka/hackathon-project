const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const User = require('./models/User');
require('./config');
const withAuth = require('./middleware');

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, SECRET_KEY } = process.env;

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}`,
  async (err) => await console.log('connected to db')
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', withAuth, (req, res) => {
  res.send('HI, MAAARK');
});

app.post('/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

app.post('/api/register', (req, res) => {
  const { name, surname, email, password } = req.body;
  bcrypt.hash(`${password}`, 10, (err, hashed) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error generating hash' });
    }
    const user = new User({ name, surname, email, password: hashed });
    user.save((err) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .json({ error: 'Error registering new user please try again.' });
      } else {
        res.json({ ok: 'Welcome to the club!' });
      }
    });
  });
});

app.post('/api/authenticate', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'Internal error please try again',
      });
    } else if (!user) {
      res.status(401).json({
        error: 'Incorrect email or password',
      });
    } else {
      bcrypt.compare(password, user.password, (err, same) => {
        if (err) {
          res.status(500).json({
            error: 'Internal error please try again',
          });
        } else if (!same) {
          res.status(401).json({
            error: 'Incorrect email or password',
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: '1h',
          });
          console.log(token);
          res.json({ jwt: token });
        }
      });
    }
  });
});

app.listen(8000, () => console.log('Listening to 8000 port'));
