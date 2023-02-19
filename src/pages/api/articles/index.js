import path from 'path'
import matter from 'gray-matter'
import fs from 'fs'
import readingTime from 'reading-time'
import { sync } from 'glob'

export default function handler(req, res) {
    const articles = fs.readdirSync(path.join(process.cwd(), 'src/data/articles'))
    const allArts = articles.reduce((a,b) => {
        const source = fs.readFileSync(path.join(process.cwd(), 'src/data/articles', b),'utf-8');
        const {data} = matter(source)
        return [
            {
              ...data,
              slug: b.replace('.mdx', ''),
              readingTime: readingTime(source).text,
            },
            ...a,
          ]
    }, []);
    res.status(200).json(allArts)
  }