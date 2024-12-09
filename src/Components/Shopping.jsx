//rfce - react component snippet
import React from 'react';
import InputBox from './InputBox';
import ListItems from './ListItems';

function Shopping() {

  const [content, setContent] = React.useState("");
  const [tasks, setTask] = React.useState([]);

  const handleInput = (e) => {
    setContent(e.target.value);
  }

  const handleDelete = (index) => {
    // for(let i = 0; i < tasks.length; i++){
    //   if(i != index){
    //     filteredArr[i] = tasks[i];
    //   }
    // }
    const filteredArr = tasks.filter((item, i) => {
        return i != index;
    })

    setTask(filteredArr);
  }

  //Logic to update state variable value based on user interation
  const handleAddItem = () => {

    //get input value : content
    const newItem = content;

    if(!newItem){
      return;
    }
    //Add item in tasks array : don't directly push to array in react, instead copy items to new array
    const newArr = [...tasks];
    newArr.push(newItem);
    setTask(newArr);
    
    setContent("");
  }

  //Component always renders with whatever value state variable holds
  return (
    <div className='shopping-list'>
      <InputBox content={content} handleInput={handleInput} handleAddItem={handleAddItem}></InputBox>
      <ListItems tasks={tasks} handleDelete={handleDelete}></ListItems>
    </div>
  )
}

export default Shopping