import { MdDelete } from "react-icons/md";

const DeleteButton=({handleOnClickDelete})=>{
//  console.log({handleOnClickDelete})

  return(
  <button type="button" className="btn btn-danger del-btn btn-sm" 
  onClick={handleOnClickDelete} ><MdDelete /></button>
  )
}
export default DeleteButton;