import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => (
    <div>
        <p>Error 404</p>
        <Link to="/">Go Home</Link>
    </div>
);
export default ErrorPage;