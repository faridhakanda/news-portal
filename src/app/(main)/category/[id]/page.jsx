import React from 'react';
import LeftSideBar from "@/components/homepage/news/leftSideBar";
import RightSideBar from "@/components/homepage/news/rightSideBar";
import Image from "next/image";

import { getCategories, getNewByCategoryId } from '@/lib/data';
import NewsCard from '@/components/newCard';
export const metadata = {
    title: "Dragon News| All news details page",
    description: "Best news provider in the world by Dragon News!",
    };

const NewByCategory = async ({ params }) => {
    const { id } = await params;
    //console.log(id, "params");
    
    const categories = await getCategories();
    //console.log(categories.data.news_category, "categories");
    const newCategories = categories.data.news_category;
    
    
    const news = await getNewByCategoryId(id);
    //console.log(news);
  return (
    <div className="container mx-auto my-8 grid grid-cols-12 gap-2">
        <div className="col-span-3">
            <LeftSideBar categories={newCategories} activeId={id}/>
            
        </div>
        <div className="col-span-6 ">
            <h2 className=' font-bold text-xl px-2'>News by category</h2>
            {news.length > 0 ? news.map(khobor => 
                <NewsCard key={khobor._id} news={khobor} />
                
                
            ) : <h2>Not found any news!</h2>}
        </div>
        <div className="col-span-3">
            <RightSideBar />
        </div>
    </div>
  );
};

export default NewByCategory;