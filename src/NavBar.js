import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {

    render() {

        const { dogs } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/dogs">
                    Dog App
                </NavLink>
                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink exact className="nav-link" to="/dogs">Home</NavLink>
                        {dogs.map(dog => <li className="nav-item" key={dog.name}>
                            <NavLink exact className="nav-link" to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                        </li>)}
                    </ul>
                </div>
            </nav>
        );

    }
}
