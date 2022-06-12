import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";

import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Practice from "./components/pages/Practice";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <Route exact path="/" element={<PrivateRoute redirect="/login" element={<Home />} />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/practice" element={<Practice />} />
                  <Route exact path="/register" element={<Register />} />
                  <Route exact path="/login" element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
			</ContactState>
		</AuthState>
	);
};

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
