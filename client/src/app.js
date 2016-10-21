const React = require('react');
const ReactDOM = require('react-dom');
const MainContainer = require('./components/MainContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <MainContainer/>,
    document.getElementById('app')
  );
}
