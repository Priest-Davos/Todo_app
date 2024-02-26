import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"

import "./App.css"
import TodoItems from "./components/TodoItems_container"

import Heading from "./components/Heading"
import { useState } from "react"


function App() {
  const [todoName, setToDoName] = useState("")//temporory
  const [date, setDate] = useState() //temporary

  const [todoItems, setToDoItems] = useState([]) //main list
  const [deletedTodoItems, setDeletedToDoItems] = useState([])//main deleted todo list

  const [clickedAddBtn, setClickedAddBtn] = useState("false")//flag 


  //assign entered item/toDo to  toDoName variable //for input field
  const handleOnChangeItem = (event) => {
    setClickedAddBtn("false")
    setToDoName(event.target.value)
    // console.log(event.target.value)   
  }

  // assign entered date to  date variable  //for input field
  const handleOnChangeDate = (event) => {
    setDate(event.target.value)
    //  console.log(event.target.value)
  }

  //Add  the entered itemm to toDolist 
  const handleOnClickAdd = () => {
    setClickedAddBtn("true")
    let newTodoItems = [...todoItems, { name: todoName, date: date }];
    // setToDoItems(newTodoItems) 
    // (todoName.length != 0) ? setToDoItems(newTodoItems) : null;
    //  setToDoName("");
    // // console.log(todoItem)
    if (todoName.length !== 0) {
      let newTodoItems = [...todoItems, { name: todoName, date: date }];
      setToDoItems(newTodoItems);
      setToDoName("");
    }

  }

  //delete the selected item /todo from listy when  btn clicked
  const handleOnClickDelete = (event, item) => {
  //console.log(event)
    console.log(item)
    if (todoItems.includes(item)) {

      let newItems = [...todoItems] //create new item list
      let indexOfSelectedItem = todoItems.indexOf(item)//get index of selected item

      let removed_item = newItems.splice(indexOfSelectedItem, 1)//remove the selected item from list and return it
      // console.log(removed_item[0])
      setToDoItems(newItems)//assign new item list to main todo list
      setDeletedToDoItems([...deletedTodoItems, removed_item[0]])//assign deletted item list to main deleted todoItems list

      //  console.log(deletedTodoItems)
    }
  }

  return (
    <center className="todo-container">

      <AppName />{/* comp 1 */}
      <AddTodo handleOnChangeItem={handleOnChangeItem} handleOnChangeDate={handleOnChangeDate} handleOnClickAdd={handleOnClickAdd} clickedAddBtn={clickedAddBtn} />{/* comp 2 */}
      {/*  <Heading text={"ToDo  List"}/> */}
      <TodoItems todoItems={todoItems} handleOnClickDelete={handleOnClickDelete} showDelBtn={"true"} />
      { /*  <Heading text={"Completed ToDo List"}/> */}
      <TodoItems todoItems={deletedTodoItems} showDelBtn={"false"} />

    </center>
  )

}

export default App
