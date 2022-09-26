import React from 'react';

const StoryCards = ({storyBook}) => {
    const { name , author, ratings, price, image} = storyBook;
    return (      
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="stoty-books" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {name}
                </h2>
                <p>{author}</p>
                <p>{ratings}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default StoryCards;