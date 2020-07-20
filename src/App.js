import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className="App">
      <NavigationBar/>
      <Portfolio />
      <Footer />
    </div>
    </>
  );
}

export default App;
