const express = require('express'),
  fetch = require('node-fetch'),
  path = require('path');

const API_URL = 'http://data.fixer.io/api/',
  API_KEY = '1011bd305c9dcdf4d1fe94069112fff1',
  app = express(),
  port = 3000;

app.listen(port, () => console.log(`Server Running on ${port}!`))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('server is running'));

app.get("/api/latest", (req, res, next) => {
  const url = `${API_URL}latest?access_key=${API_KEY}&symbols=USD,GBP,AUD,CAD,CHF,CNY,SEK,NZD`

  fetch(url)
    .then(res => res.json())
    .then(data => res.send({ data }))
    .catch(err => res.send(err));
});

app.get("/api/history", (req, res, next) => {
  const { date, currencies } = req.query,
    url = `${API_URL}${date}?access_key=${API_KEY}&base=EUR&symbols=${currencies}`;

  fetch(url)
    .then(res => res.json())
    .then(data => res.send({ data }))
    .catch(err => res.send(err));
});