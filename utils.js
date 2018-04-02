function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/');
}

module.exports = {
  catchErrors,
  ensureLoggedIn,
};
