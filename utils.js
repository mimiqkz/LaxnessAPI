/**
 * Ensure logged in
 */
function ensureLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/');
}
/**
 * Get date of today
 */
function getToday() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
}
/**
 * Get the date of the year according to the number of the day.
 * F.e 1 will be the 1st of Jan
 * @param {the year} year
 * @param {the day} day
 */
function getDate(year, day) {
  const now = new Date(year, 0);
  now.setDate(day);
  return now;
}

module.exports = {
  ensureLoggedIn,
  getToday,
  getDate,
};
