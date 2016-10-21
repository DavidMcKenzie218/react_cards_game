const React = require('react');

const Card = function(props){

  return (
    <div id={props.id}>
      <h4>{props.face}</h4>
    </div>
    )

}

module.exports = Card;