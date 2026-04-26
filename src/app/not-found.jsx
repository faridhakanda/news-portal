import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='h-[80vh] gap-3 flex justify-center items-center flex-col'>
            <h2 className='font-bold text-5xl text-purple-500'>The page is not found - 404!</h2>
        
            <Link href={"/"}>
                <button className='btn btn-primary'>Back to Home</button>
            </Link>
            
        </div>
    );
};

export default NotFound;