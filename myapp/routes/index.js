var express = require('express');
var router = express.Router();
const indexController = require('../controllers');


/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

router.get('/', indexController.getTest);
router.post('/pst', indexController.postTest);
router.post('/postTest', indexController.postTest2);
router.post('/test');

module.exports = router;
