import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const Service = ({ service }) => {
    const { name, price, image, _id, description } = service;

    return (
        <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <h3 className='text-red-500 text-xl'>Price: {price}</h3>
    <p>{description.slice(0,150)}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/services/${_id}`} className='text-link'><h3>Travel Details</h3></Link></button>
    </div>
  </div>
</div>
            {/* <div className='course-container mt-3'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h2 className='text-2xl'>{name}</h2>
                <h3 className='text-red-500 text-xl'>Price: {price}</h3>
                <p>{description}</p>
                <button className='btn-courses'><Link to={`/services/${_id}`} className='text-link'><h3>Travel Details</h3></Link></button>
            </div> */}
        </div>
    );
};

export default Service;