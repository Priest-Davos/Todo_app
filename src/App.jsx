import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import "./App.css";
import TodoItemsContainer from "./components/TodoItems_container";

import Heading from "./components/Heading";
import { useReducer, useRef, useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import { DeletedTodoItemsContext } from "./store/deleted-todo-iems-store";

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

function App() {

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
    <center className="todo-container">
      <TodoItemsContext.Provider
        value={{
          //since key and value same so can use directly instead of todoItems:todoItems, ...
          todoItems,
          handleOnClickDelete,
          onClickAdd,
        }}
      >
        <AppName />
        <AddTodo />
        {/*  <Heading text={"ToDo  List"}/> */}
        <TodoItemsContainer showDelBtn={"true"} />
      </TodoItemsContext.Provider>

      {/*  <Heading text={"Completed ToDo List"}/> */}
      <DeletedTodoItemsContext.Provider value={{ deletedTodoItems }}>
        <TodoItemsContainer showDelBtn={"false"} />
      </DeletedTodoItemsContext.Provider>
    </center>
  );
}

export default App;




//++++++++++++++++++++Ignore below lines ++++++++++++++++++++++++++++++++++++++++++












//should have moved this to addTodo before but moving it now during(36)

// //Add  the entered itemm to toDolist
// const handleOnClickAdd = (event) => {
//   event.preventDefault();//important
//   const todoName = ToDoNameElement.current.value
//   const date = dateElement.current.value
//   //console.log(event);  // here event has attribute which has form input data but didnt use that way sinve used reference
//   if (todoName.length > 0) {
//     setToDoItems((currentValues) => {
//       // console.log({currentValues});
//       return [...currentValues, { name: todoName, date: date }]
//     });

//     ToDoNameElement.current.value = ""
//     //  dateElement.current.value=""
//   }
// }


// //***********updaing todoItems main list when click add*********
// const onClickAdd=(todoName,date)=>{
//         setToDoItems((currentValues) => {
//       // console.log({currentValues});
//       return [...currentValues, { name: todoName, date: date }]
//     });
// }

//*********delete the selected item /todo from list when  btn clicked**************
// const handleOnClickDelete = (event, item) => {
//   //console.log(event)
//   console.log(item);
//   if (todoItems.includes(item)) {
//     let newItems = [...todoItems]; //create new item list
//     let indexOfSelectedItem = todoItems.indexOf(item); //get index of selected item
//     let removed_item = newItems.splice(indexOfSelectedItem, 1); //remove the selected item from list and return it
//     // console.log(removed_item[0])
//     setToDoItems(newItems); //assign new item list to main todo list
//     setDeletedToDoItems((currentValues) => [
//       ...currentValues,
//       removed_item[0],
//     ]); //assign deletted item list to main deleted todoItems list

//     //  console.log(deletedTodoItems)
//   }
// };