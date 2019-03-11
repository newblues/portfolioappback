var express = require('express');
var router = express.Router();
var request = require('request');
const projectModel = require('../models/project');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('unauthorized'.toUpperCase());
});

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

router.get('/capsule/projects/json', function(req, res, next) {
  request('http://localhost:3000/api/capsule/projects', (err, request, body) => {
    body = JSON.parse(body)
    console.log(body)
    console.log("/////")
    console.log(body.projects[0].stack_front[2])
    res.json(body)
  })
});

module.exports = router;
