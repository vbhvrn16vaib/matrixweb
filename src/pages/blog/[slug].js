import dayjs from 'dayjs'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getSlug, getArticleFromSlug } from '../../utils/mdx'
import NavHead from '@/app/navhead/sidebar'
import '../../app/components/blog.css'
import MyFooter from '@/app/components/myfooter'

const fetcher = (url) => fetch(url).then((res) => res.json());

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
    // getting all paths of each article as an array of
    // objects with their unique slugs
    // const { data, error } = useSWR('/api/articles/getSlug', fetcher);
    const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

    return {
        paths,
        // in situations where you try to access a path
        // that does not exist. it'll return a 404 page
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    //fetch the particular file based on the slug
    const { slug } = params
    const { content, frontmatter } = await getArticleFromSlug(slug)

    const mdxSource = await serialize(content)

    return {
        props: {
            post: {
                source: mdxSource,
                frontmatter,
            },
        },
    }
}

export default function Blog({ post: { source, frontmatter } }) {
    return (
        <React.Fragment>
            <Head>
                <title>{frontmatter.title} | Matrix Solutions blog</title>
            </Head>
            <div className="container">
                <div className='scroller'>
                    { frontmatter.img != null ? <img src={frontmatter.img} /> : <></>}
                    <h1 className="article-title">{frontmatter.title}</h1>
                    <p className="publish-date">
                        {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                        {frontmatter.readingTime}
                    </p>
                    <MDXRemote {...source} />
                </div>
            </div>
        </React.Fragment>
    );
}