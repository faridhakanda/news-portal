import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="font-medium text-[#647489] text-lg text-center">All Categories</h2>
            <ul className=" m-1 text-start">
                {categories.map(category => (
                    <li 
                        className={`${activeId === category.category_id && "bg-purple-500"} text-lg m-1 px-5  rounded-md`} 
                        key={category.category_id}>
                            <Link className=' block p-2' href={`/category/${category.category_id}`}>{category.category_name}</Link>
                        </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftSideBar;