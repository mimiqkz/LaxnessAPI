const dateFormat = require('dateformat');

/**
 * Ensure logged in
 */

const ensureLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/');
};

/**
 * Get corresponding id of today's date
 */
const getToday = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    now -
    start +
    (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};
/**
 * Get the date of the year according to the quote id.
 * F.e Quote with id = 1 will be the 1st of Jan
 * @param {the year} year
 * @param {the day} day
 */
const getDate = (year, day) => {
  const now = new Date(year, 0);
  now.setDate(day);
  dateFormat(now, 'm/d/yy');
  return now;
};

const catchErrors = fn => (req, res, next) => fn(req, res, next).catch(next);

module.exports = {
  ensureLoggedIn,
  getToday,
  getDate,
  catchErrors,
};
