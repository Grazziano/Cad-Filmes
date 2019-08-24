import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CabMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-danger navbar-dark mb-2">

                <Link to="/" className="navbar-brand">Filmoteca</Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/cadastro" className="nav-link">Cadastro</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/listagem" className="nav-link">Listagem</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resumo" className="nav-link">Resumo</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
