
import TodoItem from "./TodoItem"
import Heading from "./Heading"
const TodoItems = ({ todoItems, handleOnClickDelete, showDelBtn }) => {
  let emptyMessage = (todoItems.length == 0 && showDelBtn == "true") ? <p className="emptyMessage text-uppercase font-weight-bold">No todo here </p> : (todoItems.length == 0 && showDelBtn == "false") ? <p className="emptyMessage text-uppercase font-weight-bold">No todo Completed</p> : null

  //console.log(todoItems.length)
  return (

      <div className="item-container">
        {showDelBtn == "true" && <Heading text={"ToDo  List"} />}
        {showDelBtn == "false" && <Heading text={"Completed ToDo List"} />}

        {emptyMessage}


        {todoItems.map(item => <TodoItem key={item.name} todoName={item["name"]} todoDate={item.date} handleOnClickDelete={(event) => { handleOnClickDelete(event, item) }} showDelBtn={showDelBtn} />)}

      </div>
 
  )
}
export default TodoItems;