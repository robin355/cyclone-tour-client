import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './ServiceDetails.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../../../Context/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../../../Hook/UseSetTitle';

const ServicesDetails = () => {
    const details = useLoaderData()
    const navigate = useNavigate()
    useTitle('ServiceDetails')
    const { name, price, image, _id, description } = details;
    const { user } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        if (user.email) {
            const form = event.target;
            const name = form.name.value;
            const email = user?.email || 'unregister';
            const phone = form.phone.value;
            const massege = form.massege.value;
            const review = {
                serviceId: _id,
                name: name,
                email,
                phone,
                massege
            }

            fetch('https://cyclone-tour-server.vercel.app/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged > 0) {
                        toast.success('Review successFully')
                        form.reset()
                    }
                })
                .catch(error => console.log(error))
        }

    }
    const handlebtn = () => {
        if (!user?.email) {
            toast.warning('Please Login And Review Add')
            navigate('/login')
        }
    }



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
                <p>{description}</p>

            </div>

            <form onSubmit={handleSubmit} >

                <h2 className='text-4xl text-center m-3 text-orange-600'>Please Your Review</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" defaultValue={name} className="input input-bordered w-full " />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                </div>
                <textarea name='massege' className="textarea textarea-bordered h-24 w-full mt-2" placeholder="Your Review And Message"></textarea>
                <input className='btn btn-outline btn-error m-3' onClick={handlebtn} type="submit" value="Submit Review" />
            </form>

        </div>
    );
};

export default ServicesDetails;