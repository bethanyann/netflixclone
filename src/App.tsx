import React from 'react';
//components
import Header from './components/Header/header';
import Home from './components/Home';
//styles
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <div className="App">
    <Header />
     <GlobalStyle />
     <Home />
    </div>
  );
}

export default App;
