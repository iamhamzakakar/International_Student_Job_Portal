//App.js
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import Home  from './Pages/Home';
import JobList from './Pages/JobList';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Pagenotfound from './Pages/Pagenotfound';
import theme from './theme/theme'

const App = () => {
   return (
    <ThemeProvider theme={theme}>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/About' element={<About/>} />
           <Route path='/Contact' element={<Contact/>} />
           <Route path='/Signin' element={<Signin/>} />
           <Route path='/Signup' element={<Signup/>} />
           <Route path='/JobList' element={<JobList/>} />
           <Route path='*' element={<Pagenotfound/>} />
         </Routes>
       </BrowserRouter>
     </ThemeProvider>
   
   );
 }
 export default App;
