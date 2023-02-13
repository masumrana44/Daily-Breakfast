import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/News-card/NewsCard';


const Category = () => {
    const CategoryNews=useLoaderData()
    return (
        <div>
            <h2>This is Category has news:{CategoryNews.length}</h2>
            {
              CategoryNews.map(news=><NewsCard key={news._id} news={news}/>)
            }
        </div>
    );
};

export default Category;