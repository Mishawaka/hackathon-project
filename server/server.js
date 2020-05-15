const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const { User } = require('./models/User');
const { Project } = require('./models/Project');
const Event = require('./models/Event');
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

app.get('/image/:type/:folder/:file', (req, res) => {
  const { folder, type, file } = req.params;
  try {
    res.sendFile(path.join(__dirname, 'uploads', type, folder, file));
  } catch {
    res.json({ found: false });
  }
  // console.log(req.params);
  // try {
  //   res.sendFile(path.join(__dirname, 'uploads', folder, file));
  // } catch {
  //   res.json({ found: false });
  // }
});

app.post('/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

//event

app.post('/save-event', withAuth, (req, res) => {
  const {
    name,
    descr,
    city,
    addr,
    day,
    time,
    regUrl,
    project,
    imageUrl,
  } = req.body;
  const date = new Date(`${day} ${time}`);
  const event = new Event({
    name,
    descr,
    city,
    addr,
    date,
    regUrl,
    imageUrl,
  });
  fs.mkdir(path.join(__dirname, `uploads/events/${event._id}`), () => {
    Project.findOne({ name: project }, (err, pr) => {
      if (err) {
        return res.status(500).json('Error getting info from DB');
      } else {
        event.project = pr;
        event.save((err) => {
          if (err) {
            return res.status(500).json('Error saving to DB');
          } else {
            return res.json({ ok: true, id: event._id });
          }
        });
      }
    });
  });
});

app.post('/save-event-image', (req, res) => {
  const { image, name, eventId } = req.body;
  const buf = new Buffer(image, 'base64'); // decode
  fs.writeFile(
    path.join(__dirname, `uploads/events/${eventId}/${name}.jpg`),
    buf,
    (err) => {
      if (err) {
        console.log('err', err);
      } else {
        Event.findByIdAndUpdate(
          eventId,
          { imageUrl: `events/${eventId}/${name}.jpg` },
          (err) => {
            return res.json({ ok: true });
          }
        );
      }
    }
  );
});

app.post('/get-all-events', withAuth, (req, res) => {
  Event.find({}, (err, events) => {
    if (err) {
      res.status(500).json({ error: 'An error occured' });
    } else {
      res.json(events);
    }
  });
});

app.post('/get-event', withAuth, (req, res) => {
  Event.findOne({ name: req.body.name }, (err, event) => {
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
    city,
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
    city,
    descr,
    email,
    phone,
    org,
    imageUrl,
    facebook,
    inst,
  });
  fs.mkdir(path.join(__dirname, `uploads/projects/${project._id}`), () => {
    User.findOne({ email: req.user.email }, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(500).json('Error saving to DB');
      } else {
        project.coord = user;
        project.save((err) => {
          if (err) {
            console.log(err);
            return res.status(500).json('Error saving to DB');
          } else {
            return res.json({ ok: true, id: project._id });
          }
        });
      }
    });
  });
});

app.post('/save-project-image', (req, res) => {
  const { image, name, projectId } = req.body;
  const buf = new Buffer(image, 'base64'); // decode\
  fs.writeFile(
    path.join(__dirname, `uploads/projects/${projectId}/${name}.jpg`),
    buf,
    (err) => {
      if (err) {
        console.log('err', err);
      } else {
        Project.findByIdAndUpdate(
          projectId,
          { imageUrl: `projects/${projectId}/${name}.jpg` },
          (err) => {
            return err ? res.json({ err }) : res.json({ ok: true });
          }
        );
      }
    }
  );
});

app.post('/save-project-images', (req, res) => {
  const { image, name, projectId } = req.body;
  const buf = new Buffer(image, 'base64');
  fs.writeFile(
    path.join(__dirname, `uploads/projects/${projectId}/${name}.jpg`),
    buf,
    (err) => {
      if (err) console.log('err', err);
      Project.findByIdAndUpdate(
        projectId,
        { $push: { images: `projects/${projectId}/${name}.jpg` } },
        (err) => (err ? res.json({ err }) : res.json({ ok: true }))
      );
    }
  );
});

app.post('/get-all-projects', withAuth, (req, res) => {
  Project.find()
    .populate('coord')
    .exec((err, projects) => {
      if (err) {
        res.status(500).json({ error: 'An error occured' });
      } else {
        console.log(projects[0].coord);

        // let arr = [];
        // for (let i of projects) {
        //   Event.findOne()
        //     .sort({ created_at: -1 })
        //     .select({ name: i.name })
        //     .limit(1)
        //     .exec((err, event) => {
        //       i.event = event;
        //     });
        // }
        res.json(projects);
      }
    });
});

app.post('/get-project', withAuth, (req, res) => {
  Project.findOne({ name: req.body.name })
    .populate('coord')
    .exec((err, project) => {
      if (err) {
        res.status(500).json({ error: 'An error occured' });
      } else {
        res.json({ project });
      }
    });
});

// registration

app.post('/api/register', (req, res) => {
  const { name, surname, email, phone, password, imageUrl } = req.body;
  bcrypt.hash(`${password}`, 10, (err, hashed) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Error generating hash' });
    }
    const user = new User({
      name,
      surname,
      email,
      phone,
      imageUrl,
      password: hashed,
    });
    fs.mkdir(path.join(__dirname, `uploads/users/${user._id}`), () => {
      user.save((err) => {
        if (err) {
          console.log(err);
          res
            .status(500)
            .json({ error: 'Error registering new user please try again.' });
        } else {
          res.json({ ok: 'Welcome to the club!', id: user._id });
        }
      });
    });
  });
});

app.post('/save-user-image', (req, res) => {
  const { image, name, userId } = req.body;
  const buf = new Buffer(image, 'base64'); // decode\
  fs.writeFile(
    path.join(__dirname, `uploads/users/${userId}/${name}.jpg`),
    buf,
    (err) => {
      if (err) {
        console.log('err', err);
      } else {
        User.findByIdAndUpdate(
          userId,
          { imageUrl: `users/${userId}/${name}.jpg` },
          (err) => {
            return err ? res.json({ err }) : res.json({ ok: true });
          }
        );
      }
    }
  );
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
          res.json({ jwt: token, email, img: user.imageUrl });
        }
      });
    }
  });
});

app.listen(8000, () => console.log('Listening to 8000 port'));
