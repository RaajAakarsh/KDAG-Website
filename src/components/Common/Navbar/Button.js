
import React from 'react';

import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
    return (
        <Link to='/'>
        <button className='btn'>Register Now</button>
        </Link>
    )
}