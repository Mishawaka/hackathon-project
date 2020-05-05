const jwt = require('jsonwebtoken');
require('./config');

const withAuth = (req, res, next) => {
  const { token } = req.body;
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        if (jwt.TokenExpiredError) console.log('expired');
        console.log(err);
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};
module.exports = withAuth;
