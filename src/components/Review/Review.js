import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Review = (props) => {
    const { name, ratings, comment, imgUrl } = props.review;
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <p className="card-text">" {comment} "</p>
                    <p className="card-text"><strong>Ratings:</strong> {ratings === 4 ? <div className='review-icon'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div> : <div className='review-icon'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </div>}</p>
                    <img src={imgUrl} alt="" style={{ borderRadius: '50%' }} className='my-3' />
                    <h6 className="card-title">{name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Review;