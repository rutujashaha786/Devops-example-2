import React from 'react'

function ListItems(props) {
    const tasks = props.tasks;
    const handleDelete = props.handleDelete;
  return (
    <ul className="list">
          
          {
            tasks.map((item, index) => {
            return <li key={index}>
              <span>{item}</span>
              <button onClick={() => {
                handleDelete(index);
              }}>Delete</button>
            </li>
            })
          }

      </ul>
  )
}

export default ListItems