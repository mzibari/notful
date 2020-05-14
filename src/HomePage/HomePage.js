import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './HomePage.css'


class HomePage extends Component {
    render() {
        return (
            <BrowserRouter>
                <main className='App'>
                    <section className="side__section">
                        {this.props.folders}
                        <button className="add__folder">Add folder</button>
                    </section>
                    <section className="main__content">
                        {this.props.notes}
                    </section>
                </main>
            </BrowserRouter>
        );
    }
}

export default HomePage;