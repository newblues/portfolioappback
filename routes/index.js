const express = require('express');
const router = express.Router();
const projectModel = require('../models/project');
const projectslikedModel = require('../models/dbproject');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('unauthorized'.toUpperCase());
});


router.get('/all-projects', function(req, res, next) {
  // Here, we want to find every movies that we have in our collection movies on mlab
  projectslikedModel.find(function(error, data) {
    res.json({result: true, data});
  });
});


router.post('/like-project', function(req, res, next) {
  console.log("route ok");
  console.log(req.body)
  // Now, we want to save a new movie.
  var newProject = new projectslikedModel({
    name: req.body.name,
    desc: req.body.desc,
    pic_url: req.body.pic_url,
    stack_front: req.body.stack_front,
    stack_back: req.body.stack_back,
    days_spent: req.body.days_spent,
    idproject: req.body.idproject
  });
  console.log("newproject",newProject)
  newProject.save(function(error, project) {
    if(project){
      console.log("hello", project)
      res.json({result: true, project});
    } else {
      console.log("error", error)
      res.json({result: false, error});
    }
  });
});


router.delete('/like-project/:projectId', function(req, res, next) {
  // Here we want to use params in order to delete one specific element in our data base
  projectslikedModel.deleteOne({idproject: req.params.projectId},
    function(error, response) {
    res.json({result: true});
  });
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//
//   // PROJECT 1
//   const {
//     idproject,
//     name,
//     desc,
//     pic_url,
//     stack_front,
//     stack_back,
//     days_spent
//   } = req.body;
//
//   const newProject = new projectModel({
//     idproject: 1,
//     name: 'MyMails',
//     desc: 'Une web App de messagerie',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313710/close-envelope.png',
//     stack_front: ["HTML", "CSS", "JavaScript", "jQuery"],
//     stack_back: [],
//     days_spent: 4,
//   });
//   newProject.save((err, project) => {
//     console.log(project)
//   })
//
//   // PROJECT 2
//   const newProject2 = new projectModel({
//     idproject: 2,
//     name: 'BikeShop',
//     desc: 'Un site e-commerce avec moyen de paiement',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313710/bike.png',
//     stack_front: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "E-Paiement Stripe"],
//     stack_back: ["E-Paiement Stripe"],
//     days_spent: 5,
//   });
//   newProject2.save((err, project) => {
//     console.log(project)
//   })
//   // PROJECT 3
//   const newProject3 = new projectModel({
//     idproject: 3,
//     name: 'WeatherApp',
//     desc: 'Une appli web de météo en temps réel',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/sun.png',
//     stack_front: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"],
//     stack_back: ["MongoDB", "Mongoose", "Rest API"],
//     days_spent: 5,
//   });
//   newProject3.save((err, project) => {
//     console.log(project)
//   })
//   // PROJECT 4
//   const newProject4 = new projectModel({
//     idproject: 4,
//     name: 'BlackBoard',
//     desc: 'Un Backoffice de gestion de site e-commerce',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/presentation-board-with-graph.png',
//     stack_front: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "ChartJS"],
//     stack_back: ["MongoDB", "Mongoose"],
//     days_spent: 5,
//   });
//   newProject4.save((err, project) => {
//     console.log(project)
//   })
//   // PROJECT 5
//   const newProject5 = new projectModel({
//     idproject: 5,
//     name: 'MyMoviz',
//     desc: 'Une plateforme avec les derniers films en temps réel',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/video-camera.png',
//     stack_front: ["JavaScript", "ReactJS", "JSX"],
//     stack_back: ["MongoDB", "Mongoose", "Rest API"],
//     days_spent: 6,
//   });
//   newProject5.save((err, project) => {
//     console.log(project)
//   })
//   // PROJECT 6
//   const newProject6 = new projectModel({
//     idproject: 6,
//     name: "Whol'Up",
//     desc: 'Une application mobile de contacts',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/phone-book.png',
//     stack_front: ["JavaScript", "React Native", "JSX", "Expo", "Redux"],
//     stack_back: ["MongoDB", "Mongoose"],
//     days_spent: 4,
//   });
//   newProject6.save((err, project) => {
//     console.log(project)
//   })
//   // PROJECT 7
//   const newProject7 = new projectModel({
//     idproject: 7,
//     name: 'LocaPic',
//     desc: 'Une appli mobile de géolocalisation avec un chat',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/placeholder.png',
//     stack_front: ["JavaScript", "React Native", "JSX", "Expo", "Redux"],
//     stack_back: ["MongoDB", "Mongoose", "Rest API", "SocketIO", "Facebook Connect"],
//     days_spent: 5,
//   });
//   newProject7.save((err, project) => {
//     console.log(project)
//   })
//   // PROJECT 8
//   const newProject8 = new projectModel({
//     idproject: 8,
//     name: "Face'Up",
//     desc: 'Une application  mobile de reconnaissance faciale',
//     pic_url: 'https://res.cloudinary.com/da4pvqajx/image/upload/v1552313709/photocam.png',
//     stack_front: ["JavaScript", "React Native", "JSX", "Expo", "Redux"],
//     stack_back: ["MongoDB", "Mongoose", "Rest API"],
//     days_spent: 3,
//   });
//   newProject8.save((err, project) => {
//     console.log(project)
//   })
//
//   res.json("ok")
//
// });






module.exports = router;
