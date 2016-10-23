const React = require('react');

const Points = function(props){

  return (
    <div id="points">
      <p>Player points: {props.playerPoints} Ai One points: {props.aiOnePoints} Ai Two points: {props.aiTwoPoints}</p>
    </div>
    )

}

module.exports = Points;