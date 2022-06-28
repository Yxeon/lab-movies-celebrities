// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const { response } = require("../app");
const Celebrity = require("../models/Celebrity.model")
// all your routes here
router.get('/celebrities/create', (req, res, next) => {
    // Iteration #3: Add a new celebrity
      res.render('celebrities/new-celebrity.hbs');
    // ... your code here
  });
  
  router.post('/celebrities/create', (req, res, next) => {
    Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchp: req.body.catchp
    })
    .then(() => {
      res.redirect('/celebrities')
    })
    .catch((err) => {
      res.redirect('/celebrities/new-celebrity')
    })
  });

  router.get("/celebrities",(req, res, next) => {
    Celebrity.find()
    .then((response) => {
        res.render("../views/celebrities/celebrities.hbs", {response})
    })
    .catch((err) => {
        next(err)
    });
  });
module.exports = router;