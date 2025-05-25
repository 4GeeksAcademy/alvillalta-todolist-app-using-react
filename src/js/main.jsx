//  React
import React from 'react';
import ReactDOM from 'react-dom/client';

//  Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

//  CSS
import '../styles/index.css';

//  Component
import ToDoList from './components/Home';

//  Render HTML
ReactDOM.createRoot(document.getElementById('root')).render(<ToDoList/>);
