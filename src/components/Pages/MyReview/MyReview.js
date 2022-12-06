import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-toastify';
import DisplayReviews from './DisplayReviews';
const MyReview = () => {
    const { user, Logout } = useContext(AuthContext)
    const [reviews, setreviews] = useState([])
    console.log(reviews)
    useEffect(() => {
        fetch(`https://cyclone-tour-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('travel-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    Logout()
                }
                return res.json()
            })
            .then(data => setreviews(data))
    }, [user?.email])
    const handleDelete = (id) => {
        const agree = window.confirm(`You want to be Delete:`)
        if (agree) {
            fetch(`https://cyclone-tour-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Delete Succesfully')
                        const displayreview = reviews.filter(rev => rev?._id !== id)
                        setreviews(displayreview)
                    }

                })
        }
    }
    return (
        <div className='grid lg:grid-cols-2'>

            {
                reviews.length === 0 ? 'no review found' :
                    reviews.map(review => <DisplayReviews key={review?._id} review={review} user={user} handleDelete={handleDelete}></DisplayReviews>)

            }




        </div >

    );
};

export default MyReview;