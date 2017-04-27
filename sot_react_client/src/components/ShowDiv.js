import React from 'react';

function ShowDiv (props) {
  return (
    <div className='show-div' style={props.bgStyle} >
      <h1>Show Div</h1>
      <div className='preview-div' style={props.previewStyle}>{props.innerText}</div>
    </div>
  )
}

export default ShowDiv;
