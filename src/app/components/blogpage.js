import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dayjs from 'dayjs';
import './blog.css'
import MyFooter from './myfooter';

export default function BlogPage({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div className='projcard-container'>
        {posts.filter((frontMatter) => frontMatter.display != false).map((frontMatter) => {
          return (
            <Link href={`/blog/${frontMatter.slug}`} passHref>
              <div className='projcard'>
              <div class="projcard-innerbox">
                <img class="projcard-img" src={frontMatter.img} alt=""/>
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
    </>
  )
}