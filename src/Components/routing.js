import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './login';
import SignupPage from './signup';
import ExpenseTracker from './main';
export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/tracker' element={<ExpenseTracker/>}/>
                {/* <Route path='/signup' element={<Signup/>}/> */}

                
            </Routes>
        </Router>
 

      </div>
    )
  }
}
