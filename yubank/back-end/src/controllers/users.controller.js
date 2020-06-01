const express = require('express');
const router = express.Router();
const { User } = require('../../app/models');

router.get('/', (req, res) => {
  return res.send({opa: 'ksldjflkdsjflsdjf'});
});

module.exports = app => {
  return app.use('/auth', router);
}