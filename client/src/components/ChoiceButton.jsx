const React = require('react');

const ChoiceButton = function(props){

  console.log(props)

  return (
    <div id="choice-button">
      <h4>Choice Button</h4>
      <button onClick={props.onClickHandler}>Choose</button>
    </div>
    )

}

module.exports = ChoiceButton;