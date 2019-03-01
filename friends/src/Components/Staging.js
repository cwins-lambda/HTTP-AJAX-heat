import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import { BrowserRouter as Router, Route,
    Link,
    NavLink } from "react-router-dom";

class Staging extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
        <div className="Staging">
            <Route exact path="/" component={Home}/>
            <Route exact path="/friends" component={App}/>
        </div>
        );
    


        function Home() {
            return (
            <div className="home-page">
                <h1>Friends Database</h1>
                <h4>Enter below:</h4>
                <p>Warning: !</p>
        
                <Link to="/friends">Enter!</Link>
            </div>
            );
        }   
    }
}
export default Staging;