import React from 'react';
import Bannar from './Bannar';
import BookTypes from './BookTypes';
import Novels from './Novels';
import StoryBooks from './StoryBooks';

const Home = () => {
    return (
        <div>
            <Bannar/>
            <BookTypes/>
            <StoryBooks/>
            <Novels/>
        </div>
        
    );
};

export default Home;