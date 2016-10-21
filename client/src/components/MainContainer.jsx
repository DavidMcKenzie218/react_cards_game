const React = require('react');
const BlackCard  =require('./BlackCard.jsx');
var ChoiceButton = require('./ChoiceButton.jsx');

const MainContainer = React.createClass({

  render: function(){

    return (
      <div id="main-container">
        <h3>Main Container</h3>
        <BlackCard/>
        <ChoiceButton/>
      </div>
      ) 

  }

})

module.exports = MainContainer;