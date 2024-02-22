const DeleteButton=({handleOnClickDelete})=>{
  return(
  <button type="button" className="btn btn-danger del-btn btn-sm" 
  onClick={handleOnClickDelete} active>DELETE</button>
  )
}
export default DeleteButton;