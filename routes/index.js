var express = require('express');
var router = express.Router();
var UserModel = require('../model/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  UserModel.findOne({ patientNo: req.body.patientNo }, function (err, user) {
    if (err) {
      return next(err);
    } 
    if (user == null) {
      //NEW SHOP --SO INSERT
      req.body.status = 'A';
      UserModel.create(req.body, function (err, user) {
        if (err) {
          return next(err);
        }
        res.status(200);
        res.json(user);
      });
    } else {
      res.send(409, "user Already Registered");
    }
  });
});

router.get('/list', function (req, res, next) {
  const query = UserModel.find({
    "status": 'A'
  });
  query.select('patientNo name ');
  query.lean().exec((err, list) => {
    if (!err) {
      res.status(200).json(list);
    } else {
      res.status(500).json('No record Found');
    }
  });
});

module.exports = router;
