import CarouselStrap from "../components/CarouselStrap";
import CardStrap from "../components/CardStrap";
import ToDoHooks from "../todo/ToDoHooks";
// import 'dotenv/config';
import { useEffect, useState } from 'react';

import axios from "axios";
import { Card } from "react-bootstrap";

function HomePage() {
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP'

    const [homeImages, setHomeImages] = useState([]);
   
    useEffect( () => {
       getImages()
    }, [])

    async function getImages() {
        // if(homeImages.length === 0) {
            const res = await axios.get(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&rating=g&limit=5`);
            setHomeImages(res.data.data)
        // }
    }


    return (
        <div className="container">
            <h1>Welcome to the Giphy App</h1>
            <CarouselStrap images={homeImages} />
            <div className="row">
                <CardStrap />
            </div>
            <div className="row">
                <ToDoHooks />
            </div>
        </div>
    )
}


export default HomePage;