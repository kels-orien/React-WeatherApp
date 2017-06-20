var axios = require ('axios');

const OPEN_WEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f2be4b11af27b2c1f2c7238463727fc8';

//f2be4b11af27b2c1f2c7238463727fc8

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      debugger;
      if(res.data.cod && res.data.message)
      {
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }

    }, function (res) {
        throw new Error(res.data.message);
    });
  }
}
