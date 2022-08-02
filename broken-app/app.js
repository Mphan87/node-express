const express = require('express');
let axios = require('axios');
const ExpressError = require('./expressError')
var app = express();

app.use(express.json());

app.post('/', function (req, res, next) {



  try {
    let users = req.body.developers;
    let result = [];
    users.map(d => {
      let response = axios.get(`https://api.github.com/users/${d}`)
      response.then(responses => {
        let developer = {
          "name": responses.data.name, "bio": responses.data.bio
        };
        result.push(developer);
        if (result.length == users.length) {
          return res.json(result);
        }
      });
    })
  } catch (err) {
    next(err);
  }
});



app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, function () {
  console.log("Server starting on port 3000")
})

