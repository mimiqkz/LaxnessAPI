const dateFormat = require('dateformat');
const { readQuote, readAllQuotes } = require('./middleAccess');

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
const getToday = async () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff =
    (now -
      start) +
    ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  const allQuotes = await readAllQuotes();
  if (day > allQuotes.data.length) {
    day = Math.abs(day - allQuotes.data.length);
  }
  return day;
};

/**
 * Get corresponding id of today's date
 */
const getTodaysQuote = async () => {
  const today = await getToday();
  const quote = await readQuote(today);

  return quote.data;
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
  getTodaysQuote,
};
