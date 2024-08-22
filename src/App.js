import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './pages/login/Home.js';
function App() {
    return (
        <>
            <Route>
                <Router>
                    <Route path ='/' exact component={Home}/>
                </Router>
            </Route>
        </>
    )
}
export default App;