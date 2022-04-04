import React from 'react';
import './Blogs.css';
import semantic from '../../semantic.png';
const Blogs = () => {
    return (
        <section className='question mx-5'>
            <div className="question-1 bg-light p-5 rounded-3 shadow-lg">
                <h5><span className='text-danger'>Question-1:</span> What is the purpose of Context API?</h5>
                <p><span className='text-success'><strong>Answer: </strong></span>When a parent component pass it data to child component its known as a props. If we consider components as a tree and we want to share a data from root to n<sup>th</sup> child, we have to pass the data through props in every layer which is not a good way. Context API is a way to share root level components data to n<sup>th</sup> level child component directly. Context API makes it easier to pass information from parent to children nested deep down the component tree straightforwardly, rather than passing it down through a chain of props. By using this, we can solve props-drilling in our apps.</p>
            </div>
            <div className="question-2 my-5 bg-light p-5 rounded-3 shadow-lg">
                <h5><span className='text-danger'>Question-2:</span> What is Semantic elements?</h5>
                <p><span className='text-success'><strong>Answer: </strong></span>
                    There are some basic principle in web design. One of the most important principle is when we use HTML elements that should indicate what they actually are which is known as Semantic in web development. So, Semantic elements present the meaning of a web page rather than presenting something on the web. By using semantic elements in our pages, we can provide additional information about our document. It makes the document more readable and moreover it's easier to maintain the document.
                </p>
                <div className='text-center'>
                    <img src={semantic} alt="" />
                    <p>
                        <smal>Fig: Semantic elements in a document (source: w3schools)</smal>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blogs;