const React = require('react');

const Card = function(props){

  let handleClick = function(){
    props.onClicked(props.face);
  }

  return (
    <div id={props.id} onClick={handleClick}>
      <p>{props.face}</p>
    </div>
    )

}

module.exports = Card;