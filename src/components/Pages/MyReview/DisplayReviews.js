import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../Hook/UseSetTitle';

const DisplayReviews = ({ review, user, handleDelete, }) => {
    useTitle('Reviews')
    const { name, _id, massege } = review
    console.log(_id)
    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={user?.photoURL}>
                        <img src={user?.photoURL} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{massege}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/update/${_id}`}>
                            <button className='btn btn-outline btn-secondary'>Update</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-secondary'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayReviews;