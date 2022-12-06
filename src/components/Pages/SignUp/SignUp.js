import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner'
import { AuthContext } from '../../../Context/AuthProvider';
import './SignUp.css'
import useTitle from '../../../Hook/UseSetTitle';
const SignUp = () => {
    const { createUser, profileUpdate, Loading } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useTitle('SignUp')
    if (Loading) {
        return <Spinner animation="border" variant="primary" />
    }
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const photoURL = form.photourl.value
        const password = form.password.value;
        console.log(fullName, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate('/login')
                form.reset()
                console.log(user)

                handleupdateUserProfile(fullName, photoURL)
                toast.success('create Your Account')

            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }
    const handleupdateUserProfile = (fullname, photoURL) => {
        const profile = {
            displayName: fullname,
            photoURL: photoURL
        }
        profileUpdate(profile)
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='form-container'>
                <h3 className='signup-title'>SignUp</h3>
                <form onSubmit={handleSignUp}>
                    <div className='form-control'>
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="fullName" id="" placeholder='Your Full Name' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="photourl">PhotoURL</label>
                        <input type="text" name="photourl" id="" placeholder='Your PhotoURL' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" placeholder='Your Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" placeholder='Your Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Register" />
                    <p>Already have an accound?<Link to='/login'>Login</Link></p>
                    <p className='text-error'>{error}</p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;