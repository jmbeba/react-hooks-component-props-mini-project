import React from 'react'
import Article from './Article'

const ArticleList = ({posts}) => {
  return (
    <main>
        {posts.map(({title, preview, date, minutes}) => (
            <Article key={title} title={title} preview={preview} date={date} minutes={minutes}/>
        ))}
    </main>
  )
}

export default ArticleList