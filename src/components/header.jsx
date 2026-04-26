import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png';
import { format } from 'date-fns';
import BreakingNews from './shared/BreakingNews';

const Header = () => {
    return (
        <div className='text-center space-y-2 py-8'>
            <Image className='mx-auto' src={logo} alt="logo" width={300} height={200} />
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            <BreakingNews />
            
        </div>
    );
};

export default Header;