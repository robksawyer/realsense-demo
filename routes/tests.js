var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/demo', function (req, res) {
    res.render('face_tracking');
});

module.exports = router;
