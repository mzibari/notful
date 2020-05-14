import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './Navi.css'

class Navi extends Component {
    render() {
        return (
            <BrowserRouter>
                <header>
                    <h1>
                        <Link to="/homepage">Noteful</Link>
                    </h1>
                </header>
            </BrowserRouter>
        );
    }
}

export default Navi;