const DeleteButton=({handleOnClickDelete})=>{
  return(
  <button type="button" className="btn btn-danger del-btn btn-sm" 
  onClick={handleOnClickDelete} >DELETE</button>
  )
}
export default DeleteButton;