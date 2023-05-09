import { useState } from 'react';
import {useContext} from "react";
import BookContext from "./context/books"
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  const num = useContext(BookContext)
  console.log(num)


  const fetchBooks = async()=>{
    const response =  await axios.get("http://localhost:3001/books")
    setBooks(response.data)
  }

  useEffect(()=>{
    fetchBooks()
  },[])



  const editBookById = async (id , title)=>{

    const response =  await axios.put(`http://localhost:3001/books/${id}`,{
      title
    })
    

    const updatedBooks = books.map((book)=>{
       if(book.id === id){
          return {...book , title}
       }
       return books
    })
    setBooks(updatedBooks)
  }


  const deleteBookById = async (id) => {
     await axios.delete(`http://localhost:3001/books/${id}`)

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {

    const response =  await axios.post("http://localhost:3001/books" ,{
      title
    })
    
  
    const updatedBooks = [
      ...books, response.data];
     setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
