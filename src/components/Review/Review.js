import React from 'react';

const Review = (props) => {
    const { name, ratings, comment, imgUrl } = props.review;
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <p className="card-text">" {comment} "</p>
                    <p className="card-text"><strong>Ratings:</strong> {ratings} star</p>
                    <img src={imgUrl} alt="" style={{ borderRadius: '50%' }} className='my-3' />
                    <h6 className="card-title">{name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;