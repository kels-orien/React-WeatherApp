var React = require('react');

var About = React.createClass ({
  render: function () {
    return (

      <h3>About Component</h3>
);
  }
});

//using arrow functions . this is possible because
//about component only renders, it doesn't maintian state
/*var About = (props) => {
  return (<h3>About Component</h3>)
};*/
module.exports = About;
