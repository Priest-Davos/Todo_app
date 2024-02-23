import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
// import Item1 from "./components/Item1"
// import Item2 from "./components/item2"
import "./App.css"
import TodoItems from "./components/TodoItems_container"

import Heading from "./components/Heading"
import { useState } from "react"
// import TodoItem from "./components/TodoItem"



function App() {
  const [todoName, setToDoName] = useState("")//temporory
  const [date, setDate] = useState() //temporary

  const [todoItems, setToDoItems] = useState([]) //main list
  const [deletedTodoItems, setDeletedToDoItems] = useState([])//main deleted todo list
 
  const [clickedAddBtn, setClickedAddBtn] = useState("false")//flag 

  // const todoItems = [
  //   {
  //     name: "A",
  //     date: "4 - 2 - 24",
  //   },

  // }];

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
    let temptoDoItem = [...todoItems, { name: todoName, date: date }];
   // setToDoItems(temptoDoItem) 
    // (todoName.length != 0) ? setToDoItems(temptoDoItem) : null;
    //  setToDoName("");
    // // console.log(todoItem)
    if (todoName.length !== 0) {
      let temptoDoItem = [...todoItems, { name: todoName, date: date }];
      setToDoItems(temptoDoItem);
      setToDoName("");
  }

  }

  //delete the selected item /todo from listy when  btn clicked
  const handleOnClickDelete = (event, item) => {
     console.log(event)
    if (todoItems.includes(item)) {

      let newItems = [...todoItems]
      let indexOfSelectedItem = todoItems.indexOf(item)


      let removed_item = newItems.splice(indexOfSelectedItem, 1)//remove the selected item from list and return it
      //console.log(item)
     // console.log(removed_item[0])
      setToDoItems(newItems)
      setDeletedToDoItems([...deletedTodoItems, removed_item[0]])
      //console.log(todoItems.indexOf(item))
      // console.log(item)
    //  console.log(deletedTodoItems)
    }
  }

  return (
    <center className="todo-container">

      <AppName />{/* comp 1 */}
      <AddTodo handleOnChangeItem={handleOnChangeItem} handleOnChangeDate={handleOnChangeDate} handleOnClickAdd={handleOnClickAdd} clickedAddBtn={clickedAddBtn} />{/* comp 2 */}
      <Heading text={"ToDo  List"}/>
      <TodoItems todoItems={todoItems} handleOnClickDelete={handleOnClickDelete} showDelBtn={"true"} inputTodoName={todoName} />
      <Heading text={"Completed ToDo List"}/>
      <TodoItems todoItems={deletedTodoItems} showDelBtn={"false"} />


    </center>
  )

}

export default App
