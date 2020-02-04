import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Describe from "./sub/describe.jsx";
import Map from "./sub/map.jsx";
import About from "./sub/about.jsx";
import Contact from "./sub/contact.jsx";

export default class Routing extends React.Component{
    render(){
        return(
            <div className="App">
                <Router>
                <nav class="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link to = "/"><button className="navbar-main">Mitenial</button></Link>
                    <Link to = "/map"><button className="nav-button map-button">Map</button></Link>
                    <Link to = "/about"><button className ="nav-button about-button">About us</button></Link>
                    <Link to = "/contact"><button className="nav-button contant">Contact us</button></Link>
                </nav>
                <Route exact path = "/" component = {Describe}/>
                <Route path = "/map" component = {Map}/>
                <Route path = "/about" component = {About}/>
                <Route path = "/contact" component = {Contact}/>
              </Router>
            </div>
        );
    }
}