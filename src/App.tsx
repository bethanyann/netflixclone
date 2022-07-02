import React from 'react';
//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header/header';
import Home from './components/Home';
import Movie from './components/Movie';
import ActorInfo from './components/ActorInfo/actorInfo';
import NotFound from './components/NotFound';
//styles
import { GlobalStyle } from './GlobalStyles';

const App : React.FC = () => ( 
   <Router>
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/actor/:actorId' element={<ActorInfo />} />
        <Route path='/*' element={<NotFound />} />
     </Routes>
     <GlobalStyle />
   </Router>
 );


export default App;
