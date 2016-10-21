const React = require('react');

const Card = function(props){

  let handleClick = function(){
    props.onClicked(props.face);
  }

  return (
    <div id={props.id} onClick={handleClick}>
      <h4>{props.face}</h4>
    </div>
    )

}

module.exports = Card;