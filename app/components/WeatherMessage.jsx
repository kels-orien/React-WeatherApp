var React = require('react');

var WeatherMessage = React.createClass ({
  render: function () {
    var location = this.props.location;
    var temp = this.props.temp;
    // or var {location, temp} = this.props;

    return (

      <h3 className="text-center"> It is {temp} Degrees Fahrenheit in {location}</h3>
)
  }
});

//arrow functions for WeatherMessage, note how props all used
/*var WeatherMessage = (props) => {
  var {temp, location} = props;
  return (

    <h3> It is {temp} Degrees Celsius in {location}</h3>
)
};*/


//using ES6 destructuring, props can be removed.
/*var WeatherMessage = ({temp, location}) => {
  return (

    <h3> It is {temp} Degrees Celsius in {location}</h3>
)
};*/
module.exports = WeatherMessage;
