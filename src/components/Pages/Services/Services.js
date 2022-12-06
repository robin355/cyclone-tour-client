import { React, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import useTitle from '../../../Hook/UseSetTitle';
import Service from './Service';
import './Services.css'
const Services = () => {
    const services = useLoaderData();
    const [loading, setLoading] = useState(false)
    useTitle('services')
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    return (
        <div className='loaderSpin'>
            {loading ? <ClipLoader
                color={'#D0021B'}
                loading={loading}
                size={100}
            /> :
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            }
        </div>
    );
};

export default Services;