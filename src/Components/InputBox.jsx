import React from 'react'

function InputBox(props) {
     const content = props.content;
    const handleInput = props.handleInput;
    const handleAddItem = props.handleAddItem;

  return (
    <div className="input-box">
        <input type='text' value={content} onChange={handleInput}></input>
        <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default InputBox