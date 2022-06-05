const jwt = require('jsonwebtoken');

/**
 * 
 * @param {String} payload 
 */
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '3600s'});
}

module.exports = generateToken