import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/News-card/NewsCard';

const Home = () => {
    const allNews=useLoaderData();
   
    
    return (
        <div>
            <h2>This is Home Component</h2>
            {
                allNews.map(news=>  < NewsCard key={news._id} news={news} />)
            }

        </div>
    );
};

export default Home;