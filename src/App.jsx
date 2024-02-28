import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"

import "./App.css"
import TodoItems from "./components/TodoItems_container"

import Heading from "./components/Heading"
import { useRef, useState } from "react"


function App() {

  const [todoItems, setToDoItems] = useState([]) //main list
  const [deletedTodoItems, setDeletedToDoItems] = useState([])//main deleted todo list

  const ToDoNameElement = useRef()
  const dateElement = useRef()


  //Add  the entered itemm to toDolist 
  const handleOnClickAdd = (event) => {
    event.preventDefault();//important
    const todoName = ToDoNameElement.current.value
    const date = dateElement.current.value
    //console.log(event);  // here event has attribute which has form input data but didnt use that way sinve used reference
    if (todoName.length > 0) {
      let newTodoItems = [...todoItems, { name: todoName, date: date }];
      setToDoItems(newTodoItems);
      ToDoNameElement.current.value = ""
      //  dateElement.current.value=""
    }
  }

  //delete the selected item /todo from listy when  btn clicked
  const handleOnClickDelete = (event, item) => {
    //console.log(event)
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
      <AddTodo handleOnClickAdd={handleOnClickAdd} ToDoNameElement={ToDoNameElement} dateElement={dateElement} />{/* comp 2 */}
      {/*  <Heading text={"ToDo  List"}/> */}
      <TodoItems todoItems={todoItems} handleOnClickDelete={handleOnClickDelete} showDelBtn={"true"} />
      { /*  <Heading text={"Completed ToDo List"}/> */}
      <TodoItems todoItems={deletedTodoItems} showDelBtn={"false"} />

    </center>
  )

}

export default App
