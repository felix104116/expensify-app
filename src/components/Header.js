import React from 'react';
import {  Link } from 'react-router-dom';
import {startLogout} from '../actions/auth';
import { connect } from 'react-redux';
export const Header = ({startLogout}) => (
    <header className="header__navbar">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1 className="page-header__title">Expensify</h1>
                </Link>
                <button className="header__logout_button" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined,mapDispatchToProps)(Header);