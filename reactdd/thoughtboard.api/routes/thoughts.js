var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/thoughts_db');

/* GET thoughts listing. */
router.get('/', function(req, res, next) {
  db.get('thoughts').find({}, function(err, thoughts) {
    if(err) next(err);
    res.json(thoughts);
  });
});

module.exports = router;
