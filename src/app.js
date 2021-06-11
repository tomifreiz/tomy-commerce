import React from 'react';
import './app.css';
import Allproducts from './components/allproducts';
import Navbar from './components/navbar';
import Products from './components/products';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Allproducts/>
      {/* <Products /> */}
    </div>
  );
}

export default App;
