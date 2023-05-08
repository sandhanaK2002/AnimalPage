import { useState } from "react";

function BookEdit({book , onSubmit}) {
   
  const [newtitle , setNewTitle] = useState(book.title)


const handleEditInput = (event) =>{
  
  setNewTitle(event.target.value)
}

const handleSubmit = (event)=>{
  event.preventDefault()
  onSubmit(book.id , newtitle)
}



  return (
  <div>
      <form onSubmit = {handleSubmit}>
        <label>Edit List </label>
        <input value = {newtitle} onChange = {handleEditInput}/>
        <button>save</button>
      </form>
  </div>
  )
}

export default BookEdit;
