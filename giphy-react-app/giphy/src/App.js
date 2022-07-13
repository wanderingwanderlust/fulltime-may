import logo from './logo.svg';
import HomePage from './pages/HomePage';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'


function App() {
  const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP'
  const [homeImages, setHomeImages] = useState([]);

  useEffect(() => {
    getImages()
  }, [])


  async function getImages() {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`)
    setHomeImages(res.data.data)
  }


  return (
    <div className="App">
      <div className='container'>
      <HomePage></HomePage>
      </div>
      
    </div>
  );
}

export default App;
