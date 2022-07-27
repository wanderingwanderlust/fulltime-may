import {useEffect, useState } from 'react';
// gifViewer
import axios from 'axios'
import GifViewer from './helper/GifViewer';


function GifSearch() {
    // apiKey
    const apiKey = 'bS07LFfS4YxZqE5wTrcPGMTJfPTO2LxP'
    // captures users search input
    const [input, setInput] = useState('')
    // capture the gifs that come back from giphy
    const [gifs, setGifs] = useState([])
    // giphy api url
    // user access and secret tokens

    const search = async(event) => {
        event.preventDefault()
        if(!input) return;

        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=${apiKey}&rating=g&limit=10`)
        console.log(res.data.data)
        setGifs(res.data.data)
    }

    // Save will post to Mongo DB will be created in Part 3
    const save = (gif_url) => {
        console.log('this is a placeholder for saving gifs to a db')
        console.log('gif_url', gif_url)
    }

    return (
        <div className='container'>
            <div className='row'>
                <h3>Search for Gifs</h3>
                <form onSubmit={search}>
                    <input value={input} onChange={(event) => setInput(event.target.value)} />
                    <button>Search</button>
                </form>
            </div>

            <div className='row'>
                <h3>This is where the gifs you searched will be displayed</h3>
                <GifViewer
                    gifs={gifs}
                    buttonAction={save}
                    buttonText={'Save'}
                />
            </div>
        </div>
    )
}

export default GifSearch