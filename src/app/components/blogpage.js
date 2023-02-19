import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dayjs from 'dayjs';
import './blog.css'

export default function BlogPage({ posts }) {
    console.log("hix!");
    console.log(posts);
    console.log("hix2!");
  return (
    <React.Fragment>
      <Head>
        <title>My Blog</title>
      </Head>
      <div className='projcard-container'>
        {posts.map((frontMatter) => {
            console.log(frontMatter);
          return (
            <Link href={`/blog/${frontMatter.slug}`} passHref>
              <div className='projcard'>
              <div class="projcard-innerbox">
                <img class="projcard-img" src={frontMatter.img} />
                <div class="projcard-textbox">
                <h1 className="projcard-title">{frontMatter.title}</h1>
                <div class="projcard-bar"></div>
                <p className="projcard-description">{frontMatter.excerpt}</p>
                <p className="date">
                  {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                  {frontMatter.readingTime}
                </p>
                </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </React.Fragment>
  )
}