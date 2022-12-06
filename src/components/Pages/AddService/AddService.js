import React from 'react';
import { toast } from 'react-toastify';
import useTitle from '../../../Hook/UseSetTitle';
const AddService = () => {
    useTitle('AddService')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const description = form.description.value

        const added = {
            name: name,
            image, price, description

        }
        console.log(added)
        fetch('https://cyclone-tour-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(added)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged > 0) {
                    toast.success('added successFully')
                    form.reset()
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >

                <h2 className='text-3xl text-center m-3 text-orange-600'>Please Your Add Data Input:</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full " />
                    <input name='price' type="text" placeholder="Price" className="input input-bordered w-full " />
                    <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full " />
                    <input name='description' type="text" placeholder="Description" className="input input-bordered w-full " />
                    <input className='btn btn-outline btn-error m-3' type="submit" value="Added Service" />
                </div>

            </form>
        </div>
    );
};

export default AddService;