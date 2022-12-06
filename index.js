const express = require("express");

const app = express();
const port = 3000;

//parse JSON using express
app.use(express.json());
app.use(express.urlencoded ({ extended: false}));

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

//set server to listen at port
app.listen(port, () => console.log(`Server listening at port ${port}`));
