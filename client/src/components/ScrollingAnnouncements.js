import React, { useEffect, useState } from 'react';

const API_BASE_URL = '/api';

export default function ScrollingAnnouncements() {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/announcements`)
      .then(res => res.json())
      .then(data => {
        if (data.success) setAnnouncements(data.announcements);
      })
      .catch(err => console.error('Error fetching announcements:', err));
  }, []);

  return (
    <div style={{ width: '100%', background: '#dc3e2e', padding: '10px 0', textAlign: 'center', fontWeight: 'bold' }}>
      <marquee style={{ color: '#ffffff' }}>
        {announcements.length > 0
          ? announcements.map(a => a.text).join(' | ')
          : 'Welcome to Shri Shivajirao Nagawade Law College! Stay tuned for important updates and announcements.'}
      </marquee>
    </div>
  );
} 