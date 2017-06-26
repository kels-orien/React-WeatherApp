var React = require('react');

var About = React.createClass ({
  render: function () {
    return (
      <div className = "page-title">
        <h1 className = "text-center page-title">About</h1>
        <p>
          This is a free open source Weather App Application
          built using the React framework.
        </p>
        <p>
            Tools used in production of Weather App:
        </p>
        <ul>
          <li>
              <a href = "https://facebook.github.io/react">React</a> -This was then
                Javascript framework used.
          </li>
          <li>
                <a href = "https://openweathermap.org">Open Weather Map</a> - I used Open
                  Weather Map to Search for Weather data by city Name
          </li>
        </ul>
      </div>

);
  }
});

//using arrow functions . this is possible because
//about component only renders, it doesn't maintian state
/*var About = (props) => {
  return (<h3>About Component</h3>)
};*/
module.exports = About;
