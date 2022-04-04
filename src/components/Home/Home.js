import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import ps5 from '../../ps5.jpg';
import Review from '../Review/Review';
const Home = () => {
    const [reviews, setReviews] = useReview();
    let reviewMin = reviews.slice(0, 3);
    const navigate = useNavigate();
    const handleSeeAll = () => {
        const path = '/reviews';
        navigate(path);
    }
    return (
        <div>
            <div className='d-lg-flex justify-content-lg-around align-items-lg-center mx-4'>
                <div>
                    <h1>Welcome to PS5 Mania</h1>
                    <p>Here you can find all the materials related to Play Station 5. This console make a revolution in current gaming section. </p>
                    <button className="btn btn-outline-dark mb-4">Live Demo</button>
                </div>

                <div>
                    <img src={ps5} width='80%' height='70%' alt="" />
                </div>
            </div>
            <div className='review my-5 mx-5'>
                <h1>Some review of customer</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 my-4">
                    {
                        reviewMin.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <button onClick={handleSeeAll} className="btn btn-outline-primary">See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;