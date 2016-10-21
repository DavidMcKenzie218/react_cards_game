const React = require('react');
const Card = require('./Card.jsx')

const BlackCard = function(props){

  return (
    <div id="black-card">
      <h4>Black Card</h4>
      <Card id="black-card" face="--Black Card--" onClicked={props.onClicked}/>
    </div>
    )

}

module.exports = BlackCard;