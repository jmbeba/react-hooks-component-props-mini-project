import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {
  return (
    <main>
        {posts.map(({title, preview, date}) => (
            <Article key={title} title={title} preview={preview} date={date}/>
        ))}
    </main>
  )
}

export default ArticleList