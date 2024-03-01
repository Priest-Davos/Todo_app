
import { IoIosAddCircleOutline } from "react-icons/io";

import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


function AddTodo() {

  

  //(console.log(ToDoNameElement.current))

  const {ToDoNameElement , dateElement,handleOnClickAdd}=useContext(TodoItemsContext)


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