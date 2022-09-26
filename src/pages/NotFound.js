import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/images/About/4o4.gif';

const NotFound = () => {
    return (
        <div>
            <Link to='/'>
                <img className='bg-cover w-screen' src={error} alt="ErrorPic" />
            </Link>
        </div>
    );
};

export default NotFound;