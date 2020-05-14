import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './note.css'

class Note extends Component {
    static defaultProps = [];
    render() {
        return (
            <main>
                <section className="side__section">
                    <BrowserRouter>
                        <Link to='/' className="go__back__link">
                            Go back
                        </Link>
                        <h2>{this.props.folder.name}</h2>
                    </BrowserRouter>
                </section>
                <section className="main__section">
                    <div class__name="note__info">
                        <h2 className="note__name">
                            {this.props.note.name}
                        </h2>
                        <span className="date">{this.props.note.modified}</span>
                        <button className="delete_button">Delete Note</button>
                    </div>
                    <div className="note__content">
                        {this.props.note.content}
                    </div>
                </section>
            </main>
        );
    }
}


export default Note;