import Header from '@/components/header';
import Navbar from '@/components/navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            {/* <h2>Main Layout Page!</h2> */}
            <Header />
            <Navbar />
            {children}
        </div>
    );
};

export default MainLayout;