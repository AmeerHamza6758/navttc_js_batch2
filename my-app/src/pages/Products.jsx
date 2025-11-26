import React, { use, useEffect, useState } from 'react'

function Products() {
  const [postsData, setPostsData] = useState()
  const baseUrl = "https://jsonplaceholder.typicode.com"

  // fetch posts data
  async function fetchPosts() {
    const response = await fetch(`${baseUrl}/posts`)
    const jsonData = await response.json()
    setPostsData(jsonData)
    console.log(jsonData, 'posts response')
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>

      {postsData && postsData.map((item, index) => (
        <div key={item?.id}>
          <h3>Userid: {item.userId} --- ID: {item.id}</h3>
          <strong>Title: {item.title}</strong>
          <p>Body: {item.body}</p>
        </div>
      ))}

    </div>
  )
}

export default Products