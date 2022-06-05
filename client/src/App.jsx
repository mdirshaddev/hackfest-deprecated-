import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/landing';
import New from './pages/new';
import Search from './pages/search';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/search' element={<Search />} />
      <Route path='/new' element={<New />} />
    </Routes>
  );
}

export default App;
