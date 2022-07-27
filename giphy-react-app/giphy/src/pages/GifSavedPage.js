import { useEffect, useState } from "react";
import GifViewer from "../components/helper/GifViewer";

function GifSavePage() {
    // usersGifs state when we have a db 
    const userGifs = []
    const remove = () => {
         console.log('deleteing a gif from the db')
    }

    return(
        <div className="container">
            <h3>These are your saved Gifs</h3>
            <div className="row">
                <p>This is where the saved gifs will populate</p>    
                <GifViewer
                    gifs={userGifs}
                    buttonAction={remove}
                    buttonText={"Delete"}
                />
            </div>        
        </div>
    )
}

export default GifSavePage