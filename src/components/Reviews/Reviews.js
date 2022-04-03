import React from 'react';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='review my-5 mx-5'>
            <h1>What our customer says!</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;