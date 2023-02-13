import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';
/*
1.only allow authenticationed user vist the route.
2.
3.Redireact user the route
*/
const PrivateRoute = ({children}) => {
   const {user,loading}=useContext(authContext);
   const location=useLocation();
   if(loading){
    return  <Spinner className='d-flex justify-content-center' animation="border" />
   }
   if(!user){
    return <Navigate to='/login' state={{from:location}} replace /> 
   }
   return children;
}; 

export default PrivateRoute;