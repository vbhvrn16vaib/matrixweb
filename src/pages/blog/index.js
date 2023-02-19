import BlogPage from '@/app/components/blogpage'
import Clients from '@/app/components/clients'
import { useState } from 'react';
import { getAllArticles } from '../../utils/mdx'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function getStaticProps() {

    // const [data, setData] = useState([]);

    // (async() => {
    //     const articles = await getAllArticles();
    //     articles.map((article) => article.data)
    //         .sort((a, b) => {
    //             if (a.data.publishedAt > b.data.publishedAt) return 1
    //             if (a.data.publishedAt < b.data.publishedAt) return -1

    //             return 0
    //         });
    //     setData(articles);
    // })();

    const { data, error } = useSWR('/api/articles', fetcher);

    if (error) return <div>Failed to load</div>;
    
    if (!data) return <div>Loading...</div>;

    data.map((article) => article.data)
        .sort((a, b) => {
            if (a.data.publishedAt > b.data.publishedAt) return 1
            if (a.data.publishedAt < b.data.publishedAt) return -1

            return 0
    });

    console.log("xx : " + data)
    return <BlogPage posts={ data.reverse() } />;
}