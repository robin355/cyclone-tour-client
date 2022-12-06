import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
const Header = () => {
    const { user, Logout } = useContext(AuthContext)
    const handleLogout = () => {
        Logout()
            .then(() => { toast.success('Now,Logout Accound') })
            .catch(e => console.log(e))
    }
    return (
        <div className="navbar bg-orange-400 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li>  <Link to='/reviews' variant="outline-success" >My Review</Link></li>
                                    <li>  <Link to='/addservice' variant="outline-success" >Add Service</Link></li>
                                    <li>  <button variant="outline-success" onClick={handleLogout}>Logout</button></li>
                                </> :
                                <>
                                    <li><Link to='/login'>Login</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Enoyable Tour</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>

                    {
                        user?.uid ?
                            <>
                                <li>  <Link to='/reviews'  >My Review</Link></li>
                                <li>  <Link to='/addservice' >Add Service</Link></li>
                                <li>  <Link onClick={handleLogout}>Logout</Link></li>
                            </> :
                            <>
                                <li><Link to='/login'>Login</Link></li>
                            </>
                    }
                </ul>
            </div>

        </div>
    );
};

export default Header;