const express = require("express");

const app = express();
const port = 3000;

//parse JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let movies = [
  {
    id: "1",
    title: "inception",
    director: "Christopher Nolan",
    release_date: "2010-07-16"
  },
  {
    id: "2",
    title: "SinBad",
    director: "seth Duncan",
    release_date: "2010-03-24"
  },
  {
    id: "3",
    title: "Rambo",
    director: "Stallonw Francis",
    release_date: "2023-12-09"
  }
];

// Get all movie list
app.get("/movie", (req, res) => {
  res.json(movies);
});

//add movie to the list
app.post("/movie", (req, res) => {
  const movie = req.body;

  console.log(movie);
  movies.push(movie);
  res.send("Movie is added to the liat!");
});

//search for a movie list
app.get("/movie/:id", (req, res) => {
  const id = req.params.id;

  for (let movie of movies) {
    if (movie.id === id) {
      res.json(movie);
      return;
    }
  }

  res.status(400).send("Movie not found");
});

//remove movie from the list
app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;

  movies = movies.filter((movie) => {
    if (movie.id !== id) {
      return true;
    }
    return false;
  });

  res.send("Movie is deleted");
});

//set server to listen at port
app.listen(port, () => console.log(`Server listening at port ${port}`));
