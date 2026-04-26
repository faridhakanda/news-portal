import React from 'react';
import Marquee from "react-fast-marquee"; 

const news = [
    {
        id: 1,
        title: "Farid Akanda is software engineer and entrepreneur and CEO and Founder Fasys!"
    },
    {
        id: 2,
        title: "Zaheed Sabur"
    },
    {
        id: 3,
        title: "Tamim Shahriar"
    },
    {
        id: 4,
        title: "Anam Ahmed"
    },
    {
        id: 5,
        title: "Zulkernine Mahmud"
    }
]
const BreakingNews = () => {
    return (
        <div className='flex w-1/2 bg-orange-50 p-1 border-1 border-gray-400 mx-auto'>
            <button className='btn btn-secondary'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {news.map(newsd => 
                    
                        <div key={newsd.id}>
                            {newsd.title}
                        </div>
                    
                    
                )}
                
            </Marquee>
        </div>
        
    );
};

export default BreakingNews;