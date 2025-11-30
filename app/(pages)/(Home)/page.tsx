import React from 'react'
import ArticleCompo from '@/app/components/About/ArticleCompo'

export default function page() {
  return (
    <section className='bg-white'>
      <div className="flex">
        <ArticleCompo />
        <ArticleCompo />
        <ArticleCompo />
        <ArticleCompo />
      </div>

      <div className='container'>

      </div>
    </section>
  )
}
