
function AddTodo({handleOnChangeItem ,handleOnChangeDate,handleOnClickAdd ,clickedAddBtn}) {
let value
// console.log(clickedAddBtn)
  return (
    <div className="container text-center">
      <div className="row rows">
        <div className="col-6"> <input type="text" placeholder="Enter the todo here" onChange={(event)=>{handleOnChangeItem(event);value=event.target.value;}} value={clickedAddBtn=="false" ? value:""}></input></div>
        <div className="col-4">  <input type="date" onChange={(event)=>{handleOnChangeDate(event)}}></input></div>
        <div className="col-2"><button type="button" className="btn btn-success" onClick={handleOnClickAdd}>ADD</button></div>
      </div>
     
    </div>);
}
export default AddTodo