import { useReducer,createContext } from "react";

export const TodoItemsContext = createContext([])

let i = 0
const todoItemsReducer = (currentTodoItems, action) => {
  //param 1 of todoItems useReducer
  let newTodoItems = currentTodoItems;

  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.todoName, date: action.payload.date },
    ];
  } else if (action.type == "DEL_ITEM") {
    let item = action.payload.item
    // console.log(item)
    if (newTodoItems.includes(item)) {
      let newItems = [...newTodoItems]; //create new item list
      let indexOfSelectedItem = newTodoItems.indexOf(item); //get index of selected item
      let removed_item = newItems.splice(indexOfSelectedItem, 1); //remove the selected item from list and return it
      // console.log(removed_item[0])

      newTodoItems = newItems
      console.log(i += 1)
      action.payload.dispatchDeletedTodoIems({ type: "ADD_ITEM", item: removed_item[0] })
    }

  }

  return newTodoItems;
};
const deletedTodoItemsReducer = (currentState, action) => {
  let deletedTodoItems = currentState;
  console.log(deletedTodoItems)
  if (action.type === "ADD_ITEM") {

    if (!currentState.includes(action.item)) {
      deletedTodoItems = [...currentState, action.item]
    }
  }

  return deletedTodoItems

}

const TodoItemContextProvider = ({children}) => {

  const [todoItems, dispatchTodoIems] = useReducer(todoItemsReducer, []);
  const [deletedTodoItems, dispatchDeletedTodoIems] = useReducer(deletedTodoItemsReducer, []); //main deleted todo list

  //updaing todoItems main list when click add
  const onClickAdd = (todoName, date) => {
    //creating obj for action
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        date,
      },
    };
    // calling finc which we get from UseReducer whichtaking obj as arg
    dispatchTodoIems(newItemAction);
  };

  const handleOnClickDelete = (event, item) => {
    const DeleteItemAction = {
      type: "DEL_ITEM",
      payload: {
        item,
        dispatchDeletedTodoIems
      }
    }
    dispatchTodoIems(DeleteItemAction)
  }





  return (
    <TodoItemsContext.Provider
    value={{
      //since key and value same so can use directly instead of todoItems:todoItems, ...
      todoItems,
      handleOnClickDelete,
      onClickAdd,
      deletedTodoItems
    }}
  >
   {children}
   
  </TodoItemsContext.Provider>

  )
}
export default TodoItemContextProvider