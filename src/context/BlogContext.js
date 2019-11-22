import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  // const blogPosts = [
  //   { title: 'Blog Post #1' },
  //   { title: 'Blog Post #2' }
  // ]
  const [blogPosts, setBlogPosts] = useState([])

  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext
