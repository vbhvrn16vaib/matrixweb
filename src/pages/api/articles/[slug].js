import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import readingTime from 'reading-time'
import { sync } from 'glob'

const articlesPath = path.join(process.cwd(), 'src/data/articles')

export default function handler(req, res) {
    const path = req.query
    if(path['slug'] == "getSlug"){
        const slugs = getSlug();
        return res.status(200).json(slugs)
    }
    const slug = path['slug']
    const article = getArticleFromSlug(slug);
    res.status(200).json(article)
  }

  function getSlug() {
    const paths = sync(`${articlesPath}/*.mdx`)
  
    return paths.map((path) => {
      // holds the paths to the directory of the article
      const pathContent = path.split('/')
      const fileName = pathContent[pathContent.length - 1]
      const [slug, _extension] = fileName.split('.')
  
      return slug
    })
  }

function getArticleFromSlug(slug) {
    const articleDir = path.join(articlesPath, `${slug}.mdx`)
    const source = fs.readFileSync(articleDir)
    const { content, data } = matter(source)

    return {
      content,
      frontmatter: {
        slug,
        excerpt: data.excerpt,
        title: data.title,
        publishedAt: data.publishedAt,
        readingTime: readingTime(source).text,
        ...data,
      },
    }
  }