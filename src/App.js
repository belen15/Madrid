import React from 'react';
import Header from './components/header/header.js'
import Main from  './components/section/main.js'
import Footer from './components/footer/footer.js'
import './App.css'
function App() {
  return (
    <div className="contenedor">
      <Header />
      <Main/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
