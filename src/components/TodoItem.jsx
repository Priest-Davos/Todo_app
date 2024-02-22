import DeleteButton from "./DelButton"


//Using it in todaItems_container
function TodoItem({ todoName, todoDate, handleOnClickDelete, showDelBtn }) {

  //let todoName = "visit morgue";
  //let todoDate = "4/12/2023";
  //console.log(`-----> ${showDelBtn}`)
  return (


    <div className="container">
      <div className="item-row row">
         
        <div className="col-6"> {todoName}</div>
        <div className="col-4">  {todoDate}</div>
        <div className="col-2">
          {showDelBtn == "true" && <DeleteButton handleOnClickDelete={handleOnClickDelete} />}
        </div>
      </div>
    </div>

  )
}

export default TodoItem