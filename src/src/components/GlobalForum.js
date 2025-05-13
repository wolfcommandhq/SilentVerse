import { useState } from 'react'

export default function GlobalForum() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newPost.trim()) return
    
    setPosts([...posts, {
      id: Date.now(),
      content: newPost,
      timestamp: new Date().toLocaleTimeString()
    }])
    setNewPost('')
  }

  return (
    <div style={{ border: '1px solid #eee', padding: '1rem' }}>
      <h2>Global Discussions</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
          rows={3}
          style={{ width: '100%', padding: '0.5rem' }}
        />
        <button 
          type="submit"
          style={{ 
            padding: '0.5rem 1rem', 
            marginTop: '0.5rem',
            background: '#0070f3',
            color: 'white',
            border: 'none'
          }}
        >
          Post
        </button>
      </form>

      <div>
        {posts.length === 0 ? (
          <p>No discussions yet. Be the first!</p>
        ) : (
          posts.map(post => (
            <div 
              key={post.id} 
              style={{ 
                padding: '0.5rem', 
                borderBottom: '1px solid #ddd',
                marginBottom: '0.5rem'
              }}
            >
              <p>{post.content}</p>
              <small style={{ color: '#666' }}>{post.timestamp}</small>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
