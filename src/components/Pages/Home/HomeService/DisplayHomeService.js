import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayHomeService.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const DisplayHomeService = ({ limitserv }) => {
    const { _id, name, price, image, description } = limitserv;
    return (
        <div>
            <div className='course-container mt-3'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h2 className='text-2xl'>{name}</h2>
                <h3 className='text-red-500 text-xl'>Price: {price}</h3>
                <p>{description.slice(0, 100)}...</p>
                <button className='btn-courses'><Link to={`/services/${_id}`} className='text-link'><h3>Travel Details</h3></Link></button>
            </div>

        </div>
    );
};

export default DisplayHomeService;