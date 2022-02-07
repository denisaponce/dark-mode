import React, { useState } from 'react';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const posts = [
    {
      title: 'Portones',
      content: 'La mejor calidady los mejores precios',
    },
    {
      title: 'Puertas',
      content: 'La mejor calidady los mejores precios',
    },
    {
      title: 'Escaleras',
      content: 'La mejor calidady los mejores precios',
    },
    {
      title: 'Rejas',
      content: 'La mejor calidady los mejores precios',
    },
  ];
  return (
    <div className={darkMode ? 'wrapper-dark' : 'wrapper-light'}>
      <div className='container'>
        <div className='logo'>
          <div>
            <h1>Metalurgica T.A.V.</h1>
            <p>BIENVENIDOS</p>
          </div>
          <button
            type='button'
            onClick={() => setDarkMode(!darkMode)}
            className='btn'>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
      <div className='hero'>
        <h3>La mejor calidad y los mejores precios</h3>
        <p className={darkMode ? 'cto-dark' : 'cto-light'}>Pedí tu presupuesto</p>
      </div>
      <div className='container posts-container'>
        {posts.map((post, index) => (
          <div key={index} className='post-card'>
            <p className='post-title'>{post.title}</p>
            <p className='post-content'>{post.content}</p>
          </div>
        ))}
      </div>
      <footer className='footer'>
        Contactanos 3885030354 | Seguinos en nuestras redes
      </footer>
    </div>
  );
}

export default App;