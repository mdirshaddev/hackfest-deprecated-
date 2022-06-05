import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  useEffect(() => {
    const token = document.cookie.split('=')[1];
    fetch('http://localhost:4000/test', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  });
  return (
    <div>
      <Link to="/new">Create Post</Link>
      <div>Landing</div>
      <a href='http://localhost:4000/auth/google'>
        Google
      </a>
    </div>
  );
}

export default Landing;
