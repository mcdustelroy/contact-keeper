import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Practice from './components/pages/Practice';
import ContactState from './context/contact/ContactState'


const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} /> 
              <Route exact path='/about' element={<About />} /> 
              <Route exact path='/practice' element={<Practice />} /> 
            </Routes>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;




/*
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">   
              <Alert />
              <Routes>
                <Route exact path='/' element={<Home />} /> 
                <Route exact path='/about' element={<About />} />
                <Route exact path='/user/:login' element={<User />} />
                <Route exact path='/practice' element={<Practice />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
*/