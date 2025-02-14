const Celebrity = require("../models/Celebrity.model");
const Movie = require("../models/Movie.model");
const router = require("express").Router();

router.get('/movies', (req, res, next) => {
    Movie.find()
      .then((response) => {
      res.render('../views/movies/movies.hbs', {response});
      })
      .catch((error) => {
        next(error);
      })
  });


router.get('/movies/create', (req, res, next) => {
    Celebrity.find()
    .then((allCelebrities) => {
      res.render('../views/movies/new-movie.hbs', {allCelebrities})
    })
    .catch((err) => {
      next(err);
    });
  });

  router.post('/movies/create', (req, res, next) => {
    // Add a new movie
    Movie.create({
      title: req.body.title,
      genre: req.body.genre,
      plot: req.body.plot,
      cast: req.body.cast
    })
    .then((response) => {
        console.log(response);
      res.redirect('/movies')
    })
    .catch((error) => {
        console.log(error)
    })
  });

  router.get("/movies/:id", (req, res, next) => {
    Movie.findById(req.params.id)
    .populate("cast")
    .then ((response) => {
        res.render("../views/movies/movie-details.hbs", {response})
    })
    .catch((error) => {
        next(error);
    })
  })

  router.post("/movies/:id/delete", (req, res, next) => {
    const { id } = req.params;
    Movie.findByIdAndDelete(id)
    .then(() => res.redirect("/movies"))
    .catch(error => next(error));
  });

  // Edit
  router.post('/movies/:id/edit', (req, res, next) => {
    // Iteration #4: Update the drone
    const {genre, plot, cast} = req.body
    Movie.findByIdAndUpdate(req.params.id, {genre, plot, cast})
    .then(() => {
      res.redirect("/movies")
    })
    .catch((e) => {
      console.log(e)
      res.redirect("movies/edit-movie.hbs")
    })
    // ... your code here
  });
// all your routes here
module.exports = router;