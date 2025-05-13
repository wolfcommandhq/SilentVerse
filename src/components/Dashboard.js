import { useState } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('content')

  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => setActiveTab('content')}
          style={{ 
            fontWeight: activeTab === 'content' ? 'bold' : 'normal',
            padding: '0.5rem 1rem'
          }}
        >
          Content
        </button>
        <button 
          onClick={() => setActiveTab('metrics')}
          style={{ 
            fontWeight: activeTab === 'metrics' ? 'bold' : 'normal',
            padding: '0.5rem 1rem'
          }}
        >
          Metrics
        </button>
      </div>

      {activeTab === 'content' && (
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h3>Your Creative Channels</h3>
          <p>No content yet</p>
        </div>
      )}

      {activeTab === 'metrics' && (
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <h3>Community Activity</h3>
          <p>Analytics coming soon</p>
        </div>
      )}
    </div>
  )
}
