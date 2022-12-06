import { React, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../../../../Hook/UseSetTitle';
const UpdateReview = () => {
    const loadData = useLoaderData()
    const { name, massege, _id } = loadData;
    console.log(loadData)
    useTitle('UpdateReview')
    const [review, setReview] = useState(loadData);
    console.log(review)
    const handleUpdate = event => {
        event.preventDefault();
        fetch(`https://cyclone-tour-server.vercel.app/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated')
                    console.log(data);
                }

            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input onChange={handleInputChange} defaultValue={name} type="text" name='name' placeholder='name' required />
                <br />
                <textarea name='massege' onChange={handleInputChange} defaultValue={massege} className="textarea textarea-bordered h-24 w-full mt-2" placeholder="Your Update Review And Message"></textarea>
                <input className='btn btn-outline btn-error m-3' type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default UpdateReview;