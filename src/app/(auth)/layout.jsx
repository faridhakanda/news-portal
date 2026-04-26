import Navbar from '@/components/navbar';
import React from 'react';
import { montserrat } from '../layout';
const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar />
            <h2>Heder Auth</h2>
            {children}
        </div>
    );
};

export default AuthLayout;