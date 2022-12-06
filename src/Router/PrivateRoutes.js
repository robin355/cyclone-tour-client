import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
const PrivateRoutes = ({ children }) => {
    const { user, Loading } = useContext(AuthContext)
    const location = useLocation()
    if (Loading) {
        return <Spinner animation="border" variant="primary" />
    }
    if (user && user?.uid) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};



export default PrivateRoutes;