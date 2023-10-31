import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Create from './Create';
import Home from './Home';
import'bootstrap/dist/css/bootstrap.min.css'
import Edit from './edit';

//import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return(
    <><Routes>
      <Route path='/'element={<Create/>}/>
      <Route path='/Home'element={<Home/>}/>
      <Route path='/edit/:id'element={<Edit/>}/>
      </Routes></>
  )

}

export default App;
