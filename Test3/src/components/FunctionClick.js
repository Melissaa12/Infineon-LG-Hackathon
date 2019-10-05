import React from 'react';
import Button from '@enact/moonstone/Button';

function FunctionClick(){

  function clickHandler(){
    console.log("Clicked");
  }
  return(
    <div>
      <Button onClick={clickHandler}>Click</Button>
    </div>
  )
}

export default FunctionClick
