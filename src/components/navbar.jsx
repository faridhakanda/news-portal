import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png"
import Image from 'next/image';
import NavLink from './navlink';

const Navbar = () => {
    return (
        <div className='flex  items-center container mx-auto justify-center'>
            <div></div>
            <ul className='mx-auto text-[#647489] flex justify-center space-x-4'>
                <li>
                    <NavLink href="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={"text-yellow-500"} href="/about-us">About</NavLink>
                </li>
                <li>
                    <NavLink href="/career">Career</NavLink>
                </li>
            </ul>
            <div className='flex space-x-2'>
                <Image src={userAvatar} alt="user avatar" width={32} height={32} />
                <button className='btn btn-info'>
                    <Link href="/login">Login</Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;