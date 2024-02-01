const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var query = req.body.cityName;
  var apiKey = "1916afd2fb206dae922803575e0a1735";
  var unit = "metric";

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
  https.get(url, (res2) => {
    res2.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const imgURL = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";

      fs.readFile(__dirname + '/result.html', 'utf8', (err, html) => {
        if (err) {
          res.status(500).send("Error loading result page");
          return;
        }

        html = html.replace('{{cityName}}', weatherData.name)
                   .replace('{{temp}}', weatherData.main.temp)
                   .replace('{{description}}', weatherData.weather[0].description)
                   .replace('{{humidity}}', weatherData.main.humidity)
                   .replace('{{windSpeed}}', weatherData.wind.speed)
                   .replace('{{pressure}}', weatherData.main.pressure)
                   .replace('{{imgURL}}', imgURL);

        res.send(html);
      });
    });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
