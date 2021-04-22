import React from "react"
import { Link } from "react-router-dom"
import { Logo } from "./_index"
import "../sass/components/Header.sass"

function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header__top">
                    <Logo />

                    <div className="header__info">
                        <nav className="navigation">
                            <ul className="navigation__menu">
                                <li className="header__item">
                                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                        Home
                                    </Link>
                                </li>

                                <li className="header__item">
                                    <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                                        Login
                                    </Link>
                                </li>

                                <li className="header__item">
                                    <Link to="/registration" style={{ textDecoration: "none", color: "inherit" }}>
                                        Registration
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <ul className="services">
                    <li className="service__item enum">
                        <Link to="/catalog" style={{ textDecoration: "none", color: "inherit" }}>
                            <img className="service-logo" src="/images/light.png" alt="" />
                            Catalog
                        </Link>
                    </li>

                    <li className="service__item enum">
                        <Link to="/products" style={{ textDecoration: "none", color: "inherit" }}>
                            <img className="service-logo" src="/images/light.png" alt="" />
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header