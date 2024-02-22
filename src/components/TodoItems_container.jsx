
import TodoItem from "./TodoItem"
const TodoItems = ({ todoItems, handleOnClickDelete,showDelBtn}) => {
 let emptyMessage=todoItems.length==0 ?<p>No todo here </p> :null
 
  //console.log(todoItems.length)
  return (
    <> 
  
       
      <div className="item-container">
     
        {emptyMessage}
       

        {todoItems.map(item => <TodoItem todoName={item["name"]} todoDate={item.date} handleOnClickDelete={(event)=>{handleOnClickDelete(event,item)}}  showDelBtn={showDelBtn}/>)}

      </div>
    </>
  )
}
export default TodoItems;