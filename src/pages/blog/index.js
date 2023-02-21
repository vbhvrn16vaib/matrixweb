import BlogPage from '@/app/components/blogpage'
import Clients from '@/app/components/clients'
import { useState } from 'react';
import { getAllArticles } from '../../utils/mdx'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function RenderBlog() {


    const { data, error } = useSWR('/api/articles', fetcher);

    if (error) return <div>Failed to load</div>;

    if (!data) return <div>Loading...</div>;

    data.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    return <BlogPage posts={ data } />;
}