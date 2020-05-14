import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import './folderPage.css'


class FolderPage extends Component {
    render() {
        return (
            <div className="folder__page">
                <section className="folders">
                    <BrowserRouter>
                        <Link to=""></Link>
                    </BrowserRouter>
                </section>
            </div>
        );
    }
}

export default FolderPage;