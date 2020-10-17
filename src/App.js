import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import Jumbotron2 from './components/Jumbotron2';
import Jumbotron3 from './components/Jumbotron3';
import Jumbotron4 from './components/Jumbotron4';
import Jumbotron5 from './components/Jumbotron5';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Jumbotron2 />
      <Jumbotron3 />
      <Jumbotron4 />
      <Jumbotron5 />
    </div>
  );
}

export default App;
