import React from 'react';
import Image from 'next/image';
import { CiBookmark, CiShare1 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import Link from 'next/link';



const NewsCard = ({news}) => {
    return (
        
        <div className="card bg-base-100  shadow-sm my-2 px-2">
            
                <div className="card-body">
                <div className='flex bg-slate-200 p-2 rounded-md justify-between gap-2 items-center'>
                   
                    <div className='flex items-center gap-1'>
                        <Image className='rounded-full' src={news.author?.img} alt={news.author} width={40} height={40}/>
                        <div>
                            <h2 className='font-semibold'>{news.author?.name}</h2>
                            <p className='text-xs'>{news.author?.published_date}</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-1'>
                        <CiShare1 />
                        <CiBookmark />
                    </div>
                </div>
                <h2 className="card-title">{news.title}</h2>
                <figure>
                    <Image className='w-full' src={news.image_url} alt={news.title} width="400" height="400" />
                </figure>
                
                <p className='line-clamp-3'>{news.details}</p>
                
                <div className='flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <p className='flex gap-1 items-center'><span className='text-yellow-300'><FaStar /></span>{news.rating.number}</p>
                        <p className='flex gap-1 items-center'><FaEye />{news.total_view}</p>
                    </div>
                    <button className='btn btn-primary'>
                        <Link href={`/news/${news._id}`}>See details</Link>
                    </button>
                </div>
            </div>
  
</div>
    );
};

export default NewsCard;