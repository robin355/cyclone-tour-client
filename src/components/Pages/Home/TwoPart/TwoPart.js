import React from 'react';
import { FaCalendarCheck, FaUserAlt, FaDollarSign, FaBolt, FaWallet, FaBacon } from "react-icons/fa";
const TwoPart = () => {
    return (
        <div>
            <h3 className='text-orange-600 text-3xl text-center'>My Services</h3>
            <p className='text-center'>“Adventure is worthwhile”</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className='flex'>
                    <div>
                        <p className='bg-orange-400 mt-2 p-2 text-white rounded-lg mr-2'> <FaCalendarCheck /></p>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-2xl'>Looking for a tour program?</h1>
                            <p>Inhabiting discretion the her dispatched decisively boisterous joy covered the whole of her lower arm.</p>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='bg-orange-400 mt-2 p-2 text-white rounded-lg mr-2'><FaUserAlt></FaUserAlt></p>
                    </div>
                    <div>
                        <h2 className='text-2xl'>Need someone to guide tour?</h2>
                        <p>Great asked oh under together prospect kindness securing six Gregor then turned to look out the window.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='bg-orange-400 mt-2 p-2 text-white rounded-lg  mr-2'><FaDollarSign></FaDollarSign></p>
                    </div>
                    <div>
                        <h2 className='text-2xl'> cash And Helpful ?</h2>
                        <p>Taking some currency as cash when you travel abroad can be a wise move. You can search for the best exchange rates in advance before the trip.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='bg-orange-400 mt-2 p-2 text-white rounded-lg  mr-2'><FaBolt></FaBolt></p>
                    </div>
                    <div>
                        <h1 className='text-2xl'>Travels Hotel and sleeping?</h1>
                        <p>Comfort & good location. Official hotel rate from $56! Book Your Ideal Place to Stay. Photos & reviews. Secure booking.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='bg-orange-400 mt-2 p-2 text-white rounded-lg  mr-2'><FaWallet></FaWallet></p>
                    </div>
                    <div>
                        <h2 className='text-2xl'>Travel Fooods and Snacks?</h2>
                        <p>Here is the list of 15 healthy snacks you will need to have a great train ride,Fruits. Pack fruits like apples, oranges, and bananas, in your bags.</p>
                    </div>
                </div>
                <div className='flex'>
                    <div>
                        <p className='bg-orange-400 mt-2 p-2 text-white rounded-lg  mr-2'><FaBacon></FaBacon></p>
                    </div>
                    <div>
                        <h2 className='text-2xl'>Travel Jurney?</h2>
                        <p>Travel journal prompts and creative ideas to entertain and motivate you during your trip. Maps, checklists, & activities for your trip diary.</p>
                    </div>
                </div>
            </div>
            <h3 className='text-orange-600 text-3xl text-center mt-3'>Lattest Blog</h3>
            <p className='text-center'>“The trips that offered by local guides or experts for travellers”</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mt-3 '>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://www.tripeasygo.com/admin/webroot/uploads/tour-package-image/2b.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bangkok-Pattaya</h2>
                        <p> May 26, 2017</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-error">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://www.planetware.com/photos-large/JPN/japan-mount-fuji-water-reflection.jpg" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Mount Fuji</h2>
                        <p>March 26, 2017</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-error">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.natgeofe.com/n/cb873b6f-18ff-4647-8dc0-82b62e9d5849/hong-kong-travel.jpg?w=2520&h=1680" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Hong Kong</h2>
                        <p> April 26, 2017</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-error">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoPart;
