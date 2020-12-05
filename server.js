const express = require("express");
const bodyParser = require('body-parser');
const Twit = require('twit');
require("dotenv/config");

const app = express();
const port = 3001;

const client = new Twit({
  consumer_key: process.env.api_key,
  consumer_secret: process.env.api_secret_key,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/timeline', (req, res) => {
  client.get('https://api.twitter.com/1.1/statuses/home_timeline.json', { screen_name: 'ayedoemateo' }, (error, data) => {
    console.log('fetching home feed')
    error ? console.log('ERROR: ', error) : res.send(data)
  });
})

app.get('/timeline/:user', (req, res) => {
  client.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.params.user}`, (error, data) => {
    console.log('fetching user feed')
    error ? console.log('ERROR: ', error) : res.send(data)
  })
})

app.get('/', (req, res) => {
  res.send('Welcome to Twitter Clone!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
