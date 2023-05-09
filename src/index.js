import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BookContext from "./context/books"
import App from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <BookContext.Provider value = {5}>
        <App />
    </BookContext.Provider>
    );
