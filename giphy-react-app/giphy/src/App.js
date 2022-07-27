import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Navi from './partials/Navi';
import GifSearchPage from './pages/GifSearchPage';
import GifSavePage from './pages/GifSavedPage';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'
import About from './pages/About';


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
      <Router>
        <Navi />

        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<GifSearchPage />} />
          <Route path='/saved' element={<GifSavePage />} />
        </Routes>
      </Router>
     
      <div className='container'>
  
      </div>
      
    </div>
  );
}

export default App;
