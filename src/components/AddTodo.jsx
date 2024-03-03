
import { IoIosAddCircleOutline } from "react-icons/io";

import { TodoItemsContext } from "../store/todo-items-store";
import {useRef, useContext } from "react";


function AddTodo() {

  const ToDoNameElement = useRef()
  const dateElement = useRef()

  
  

  //(console.log(ToDoNameElement.current))

  const {onClickAdd}=useContext(TodoItemsContext)

  //Add  the entered itemm to toDolist 
  const handleOnClickAdd = (event) => {
    event.preventDefault();//important
    const todoName = ToDoNameElement.current.value
    const date = dateElement.current.value
    //console.log(event);  // here event has attribute which has form input data but didnt use that way sinve used reference
    if (todoName.length > 0) {
      // setToDoItems((currentValues) => {
        //  console.log({currentValues});
      //   return [...currentValues, { name: todoName, date: date }]
      // });
      // console.log(todoName,date)
      onClickAdd(todoName,date)

      ToDoNameElement.current.value = ""
      //  dateElement.current.value=""
    }
  }



  return (
    <div className="container text-center">

      <form onSubmit={handleOnClickAdd}>

        <div className="row rows">
          <div className="col-7">
            <input
              type="text"
              ref={ToDoNameElement}
              placeholder="Enter the todo here"
             >
            </input>
          </div>
          <div className="col-3">
            <input
              type="date"
              ref={dateElement}
             >
            </input>
          </div>
          <div className="col-2">
            <button className="btn btn-success  btn-sm  add-btn" ><IoIosAddCircleOutline /></button>
          </div>
        </div>
      </form>

    </div>);
}
export default AddTodo