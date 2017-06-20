var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require ('Weather');
var About = require ('About');
var Example = require ('Example');


//example of what was done above in react-router
 var obj = {
   name: 'kels'
 }
 var {name} = obj;


ReactDOM.render (
<Router history = {hashHistory}>
  <Route path ="/"component = {Main}>
    <Route path="about" component ={About}/>
    <Route path="example" component ={Example}/>
    <IndexRoute component = {Weather}/>
  </Route>

</Router>,
document.getElementById('app')
);
