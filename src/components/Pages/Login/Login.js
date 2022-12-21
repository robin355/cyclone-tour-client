import { React, useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
import './Login.css'
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../Hook/UseSetTitle';
const Login = () => {
    const { SignInEmailPassword, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    useTitle('Login')
    const from = location.state?.from?.pathname || '/';
    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        SignInEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                const currentUser = {
                    email: user.email
                }

                toast.success('Login Success')
                fetch(`https://cyclone-tour-server.vercel.app/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('travel-token', data.token)
                        navigate(from, { replace: true })
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                toast.warning("Please Check your password or Email")
                setError(errorMessage)
                form.reset()
            })

    }
    const handleGoogleSign = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                toast.success('Login By Email')
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }

    return (
        <div>
            <div className='form-container'>
                <h3 className='signup-title'>Login</h3>
                <form onSubmit={handleSignIn}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login" />
                    <p>Have you an Accound?<Link to='/signUp'>SignUp</Link></p>
                    <p className='text-error'>{error}</p>
                    <div className='mt-2'>
                        <button onClick={handleGoogleSign} className="btn btn-outline btn-success"><FaGoogle></FaGoogle> Google</button>
                        <button className="btn btn-outline btn-success ml-2 "><FaGithub></FaGithub> GitHub</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Login;