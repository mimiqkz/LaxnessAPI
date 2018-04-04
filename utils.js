function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/');
}

function getToday() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}

function getDate(year, day) {
  const now = new Date(year, 0);
  now.setDate(day);
  return now;
}

module.exports = {
  catchErrors,
  ensureLoggedIn,
  getToday,
  getDate,
};
