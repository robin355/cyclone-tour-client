import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DisplayHomeService from './DisplayHomeService';

const HomeService = () => {
    const [serviceLimit, setServiceLImit] = useState([])
    useEffect(() => {
        fetch(`https://cyclone-tour-server.vercel.app/serviceLimit`)
            .then(res => res.json())
            .then(data => setServiceLImit(data))
    }, [])

    return (
        <div >
            <h2 className='text-5xl text-center text-orange-600 mt-[80px]'>Travel Blog Service</h2>
            <p className='text-center mt-2 mb-[80px]'>"We have a unique way of meeting your adventurous expectations!"</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    serviceLimit.map(limitserv => <DisplayHomeService key={limitserv._id} limitserv={limitserv}></DisplayHomeService>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-error m-4">
                    <Link to='/services'>See All</Link>
                </button>
            </div>

        </div>
    );
};

export default HomeService;