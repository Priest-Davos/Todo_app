import DeleteButton from "./DelButton"

//Using it in todaItems_container
function TodoItem({ todoName, todoDate, handleOnClickDelete, showDelBtn }) {
//console.log(showDelBtn)
  return (

    <div className="container">
      <div className="item-row row">

        <div className="col-6  text-uppercase font-weight-bold"> {todoName}</div>
        <div className="col-4  font-weight-bold">  {todoDate}</div>
        <div className="col-2">
          {showDelBtn == "true" && <DeleteButton handleOnClickDelete={handleOnClickDelete} />}
        </div>
      </div>
    </div>

  )
}

export default TodoItem


// can directly use this btn but still made a separate component of it but dont think its of any use

// <button type="button" className="btn btn-danger del-btn btn-sm"
// onClick={handleOnClickDelete} >DELETE</button>