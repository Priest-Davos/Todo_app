import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"

import "./App.css"
import TodoItemsContainer from "./components/TodoItems_container"

import Heading from "./components/Heading"
import { useRef, useState } from "react"
import { TodoItemsContext } from "./store/todo-items-store"
import { DeletedTodoItemsContext } from "./store/deleted-todo-iems-store"


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
      setToDoItems((currentValues) => {
        // console.log({currentValues});
        return [...currentValues, { name: todoName, date: date }]
      });

      ToDoNameElement.current.value = ""
      //  dateElement.current.value=""
    }
  }

  //delete the selected item /todo from list when  btn clicked
  const handleOnClickDelete = (event, item) => {
    //console.log(event)
    if (todoItems.includes(item)) {

      let newItems = [...todoItems] //create new item list
      let indexOfSelectedItem = todoItems.indexOf(item)//get index of selected item
      let removed_item = newItems.splice(indexOfSelectedItem, 1)//remove the selected item from list and return it
      // console.log(removed_item[0])
      setToDoItems(newItems)//assign new item list to main todo list
      setDeletedToDoItems((currentValues) => [...currentValues, removed_item[0]])//assign deletted item list to main deleted todoItems list

      //  console.log(deletedTodoItems)
    }
  }

  return (

    <center className="todo-container">
      <TodoItemsContext.Provider value={{
        //since key and value same so can use directly instead of todoItems:todoItems, ...
        todoItems,
        handleOnClickAdd,
        handleOnClickDelete,
        ToDoNameElement,
        dateElement,

      }}>
        <AppName />{/* comp 1 */}
        <AddTodo  />{/* comp 2 */}
        {/*  <Heading text={"ToDo  List"}/> */}
        <TodoItemsContainer showDelBtn={"true"} />

      </TodoItemsContext.Provider>

      { /*  <Heading text={"Completed ToDo List"}/> */}
      <DeletedTodoItemsContext.Provider value={{ deletedTodoItems }}>
        <TodoItemsContainer showDelBtn={"false"} />
      </DeletedTodoItemsContext.Provider>


    </center>

  );

}

export default App
