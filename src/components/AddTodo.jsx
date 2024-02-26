import { useState } from "react";

import { IoIosAddCircleOutline } from "react-icons/io";

function AddTodo({ handleOnChangeItem, handleOnChangeDate, handleOnClickAdd, clickedAddBtn }) {
  let [value, setValue] = useState("")
  // console.log(clickedAddBtn)
  return (
    <div className="container text-center">
      <div className="row rows">
        <div className="col-7"> <input type="text" placeholder="Enter the todo here" onChange={(event) => { handleOnChangeItem(event); setValue(event.target.value); }} value={clickedAddBtn == "false" ? value : ""}></input></div>
        <div className="col-3">  <input type="date" onChange={(event) => { handleOnChangeDate(event) }}></input></div>
        <div className="col-2"><button type="button" className="btn btn-success  btn-sm  add-btn" onClick={handleOnClickAdd}><IoIosAddCircleOutline  /></button></div>
      </div>
 
    </div>);
}
export default AddTodo