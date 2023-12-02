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
import Events from './Pages/Events';
import Profiles from './Pages/Profiles';
import {Helmet} from "react-helmet";


const App = () => {
   return (
    <ThemeProvider theme={theme}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>StudyFinJourney</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Find Your First Student Job" />
        </Helmet>
       <BrowserRouter>
         <Routes>
           <Route path='/home' element={<Home/>} />
           <Route path='/About' element={<About/>} />
           <Route path='/Contact' element={<Contact/>} />
           <Route path='/' element={<Signin/>} />
           <Route path='/Signup' element={<Signup/>} />
           <Route path='/JobList' element={<JobList/>} />
           <Route path='/Events' element={<Events/>} />
           <Route path='/Profile' element={<Profiles/>} />
           <Route path='*' element={<Pagenotfound/>} />
         </Routes>
       </BrowserRouter>
     </ThemeProvider>
   
   );
 }
 export default App;
