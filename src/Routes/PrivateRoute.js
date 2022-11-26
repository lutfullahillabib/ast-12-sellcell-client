import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='flex flex-col gap-3 justify-center items-center h-[80vh]'>

            <progress className="progress w-8/12 h-6 progress-primary" ></progress>
            <progress className="progress w-8/12 h-6 progress-secondary" ></progress>
            <progress className="progress w-8/12 h-6 progress-accent" ></progress>

            <progress className="progress w-8/12 h-6 progress-success" ></progress>
            <progress className="progress w-8/12 h-6 progress-info" ></progress>

            <progress className="progress w-8/12 h-6 progress-warning" ></progress>
            <progress className="progress w-8/12 h-6 progress-error" ></progress>

        </div>

    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;


