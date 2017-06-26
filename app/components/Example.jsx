var React = require('react');
var {Link} = require('react-router');
var Example = React.createClass ({
  render: function () {
    return (
  <div className = "page-title">
      <h1 className ="text-center page-title" >Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to ='/?location=Lagos'>Lagos, Nigeria</Link>
        </li>
        <li>
          <Link to ='/?location=Coventry'>Coventry, Uk</Link>
        </li>
      </ol>
      </div>
);
  }
});

module.exports = Example;
