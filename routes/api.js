var express = require('express');
var router = express.Router();
var request = require('request');
const projectModel = require('../models/project');


/* GET users listing. */
router.get('/capsule/projects', function(req, res, next) {
  projectModel.find((err, projects) => {
    if(err){
      console.log(err)
      res.json({result: false, err})
    } else {
      console.log(projects)
      res.json({result: true, projects})
    }
  })
});


module.exports = router;
