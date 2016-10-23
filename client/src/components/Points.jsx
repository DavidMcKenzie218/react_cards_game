const React = require('react');

const Points = function(props){

  return (
    <div id="points">
      <h4>Player points: {props.playerPoints} Ai One points: {props.aiOnePoints} Ai Two points: {props.aiTwoPoints}</h4>
    </div>
    )

}

module.exports = Points;