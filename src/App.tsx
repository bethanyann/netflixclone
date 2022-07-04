import React from 'react';
//routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//context
import UserProvider from './context';
//components
import Header from './components/Header/header';
import Home from './components/Home';
import Movie from './components/Movie';
import ActorInfo from './components/ActorInfo/actorInfo';
import NotFound from './components/NotFound';
import Login from './components/Login/Login';
//styles
import { GlobalStyle } from './GlobalStyles';

const App = () => ( 
   <Router>
    <UserProvider>
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/actor/:actorId' element={<ActorInfo />} />
        <Route path='/*' element={<NotFound />} />
     </Routes>
     <GlobalStyle />
     </UserProvider>
   </Router>
 );


export default App;
