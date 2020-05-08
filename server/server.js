const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const User = require('./models/User');
const Project = require('./models/Project');
const Event = require('./models/Event')
require('./config');
const withAuth = require('./middleware');

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE, SECRET_KEY } = process.env;

mongoose.connect(
  `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_DATABASE}`,
  async (err) => await console.log('connected to db')
);
mongoose.set('useCreateIndex', true);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', withAuth, (req, res) => {
  res.send('HI, MAAARK');
});

app.get('/image/:folder/:file', (req, res) => {
  const { folder, file } = req.params;
  try {
    res.sendFile(path.join(__dirname, 'uploads', folder, file));
  } catch {
    res.json({ found: false });
  }
});

app.post('/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

//event

app.post('/save-event', withAuth, (req, res) => {
  const {
    name,
    theme,
    descr,
    email,
    phone,
    org,
    city,
    street,
    date,
    imageUrl,
    facebook,
    inst,
  } = req.body;
  const event = new Event({
    name,
    theme,
    descr,
    email,
    phone,
    org,
    city,
    street,
    date,
    imageUrl,
    facebook,
    inst,
  });
  event.save((err) => {
    if (err) {
      return res.status(500).json('Error saving to DB');
    } else {
      return res.json({ ok: true });
    }
  });
});

app.post('/save-event-image', (req, res) => {
  const { image, name } = req.body;
  const buf = new Buffer(image, 'base64'); // decode
  fs.writeFile(
    path.join(__dirname, `uploads/events/${name}.jpg`),
    buf,
    (err) => {
      if (err) {
        console.log('err', err);
      } else {
        return res.json({ ok: true });
      }
    }
  );
});

app.post('/get-all-events', withAuth, (req, res) => {
  Project.find({}, (err, users) => {
    if (err) {
      res.status(500).json({ error: 'An error occured' });
    } else {
      res.json(users);
    }
  });
});

app.post('/get-events', withAuth, (req, res) => {
  Project.findOne({ name: req.body.name }, (err, event) => {
    if (err) {
      res.status(500).json({ error: 'An error occured' });
    } else {
      res.json(event);
    }
  });
});

// project

app.post('/save-project', withAuth, (req, res) => {
  const {
    name,
    theme,
    descr,
    email,
    phone,
    org,
    imageUrl,
    facebook,
    inst,
  } = req.body;
  const project = new Project({
    name,
    theme,
    descr,
    email,
    phone,
    org,
    imageUrl,
    facebook,
    inst,
  });
  project.save((err) => {
    if (err) {
      return res.status(500).json('Error saving to DB');
    } else {
      return res.json({ ok: true });
    }
  });
});

app.post('/save-project-image', (req, res) => {
  const { image, name } = req.body;
  const buf = new Buffer(image, 'base64'); // decode
  fs.writeFile(
    path.join(__dirname, `uploads/projects/${name}.jpg`),
    buf,
    (err) => {
      if (err) {
        console.log('err', err);
      } else {
        return res.json({ ok: true });
      }
    }
  );
});

app.post('/get-all-projects', withAuth, (req, res) => {
  Project.find({}, (err, users) => {
    if (err) {
      res.status(500).json({ error: 'An error occured' });
    } else {
      res.json(users);
    }
  });
});

app.post('/get-project', withAuth, (req, res) => {
  Project.findOne({ name: req.body.name }, (err, project) => {
    if (err) {
      res.status(500).json({ error: 'An error occured' });
    } else {
      res.json(project);
    }
  });
});

// registration

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
