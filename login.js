const express = require('express');
const passport = require('passport');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    let message = '';
    if (req.session.messages && req.session.messages.length > 0) {
      [message] = req.session.messages;
    }

    res.render('login', { showLogin: false, message, title: 'Innskráning' });
  })
  .post(
    passport.authenticate('local', {
      failureMessage: 'Vitlaust notendanafn eða lykilorð',
      failureRedirect: '/',
    }),
    (req, res) => {
      res.redirect('/api/table');
    },
  );

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
