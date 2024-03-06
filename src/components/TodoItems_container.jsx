
import TodoItem from "./TodoItem"
import Heading from "./Heading"

import { useContext } from "react"
import { TodoItemsContext } from "../store/todo-items-store"
import { DeletedTodoItemsContext } from "../store/deleted-todo-iems-store"

const TodoItemsContainer = ({ showDelBtn }) => {

  const contextObj = useContext(TodoItemsContext)//can also get direct items by destructing
  // const delTodoContextObj = useContext(DeletedTodoItemsContext)

  //if  showDelBtn=="true" then todoItems contain normal todoItem else deletedTodoItems
  const todoItems = showDelBtn == "true" ? contextObj.todoItems : contextObj.deletedTodoItems

  // todoItems.map((item)=>{console.log(`todoItems context obj ->${item.name}`)})


  let emptyMessage = (todoItems.length == 0 && showDelBtn == "true") ? <p className="emptyMessage text-uppercase font-weight-bold">No todo here </p> : (todoItems.length == 0 && showDelBtn == "false") ? <p className="emptyMessage text-uppercase font-weight-bold">No todo Completed</p> : null



  //console.log(todoItems.length)
  return (

    <div className="item-container">
      {showDelBtn == "true" && <Heading text={"ToDo  List"} />}
      {showDelBtn == "false" && <Heading text={"Completed ToDo List"} />}

      {emptyMessage}

      {todoItems.map(item => <TodoItem key={item.name} todoName={item["name"]} todoDate={item.date} handleOnClickDelete={(event) => { contextObj.handleOnClickDelete(event, item) }} showDelBtn={showDelBtn} />)}

    </div>

  )
}
export default TodoItemsContainer;