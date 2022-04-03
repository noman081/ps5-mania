import React from 'react';

const Review = (props) => {
    const { name, ratings, comment } = props.review;
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <p className="card-text">" {comment} "</p>
                    <p className="card-text">Ratings: {ratings} star</p>
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;