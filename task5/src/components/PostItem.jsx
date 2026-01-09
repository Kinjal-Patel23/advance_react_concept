import React, { useEffect } from 'react'

const PostItem = React.memo(({ post }) => {
  useEffect(() => {
    console.log(`Post ${post.id} re-rendered`)
  })

  return (
    <div className='bg-zinc-900 p-4 rounded-lg border border-zinc-800'>
      <h2 className='text-emerald-400 font-semibold'>{post.title}</h2>
      <p className='text-zinc-400 text-sm'>{post.body}</p>
    </div>
  )
})

export default PostItem
