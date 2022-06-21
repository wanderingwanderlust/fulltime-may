const gifContainer = document.getElementById('gif-container')
const apiKey = 'INSERT_YOUR_API_KEY_HERE';


async function fetchGifs() {
    gifContainer.innerHTML = '';

    const query = document.getElementById('gif-input').value

    if(query) {
        const res = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10`)
        if(!res.ok) {
            alert('API issue, something is wrong')
            console.log(res)
        }

        const json = await res.json();
        // create method that will render the gifs to our homepage
        renderGifs(json.data)
    } else {
        alert('User must provide a search value')
    }
}

function renderGifs(gifs) {
    gifs.forEach((gif) => {
        const newImage = document.createElement('img');
        console.log(gif)
        newImage.setAttribute('src', gif.images.original.url)
        newImage.setAttribute('alt', gif.title )
        newImage.setAttribute('alt-src', gif.images.original_still.url)

        newImage.onclick = () => {
            const currentUrl = newImage.getAttribute('src');
            const altUrl = newImage.getAttribute('alt-src');
            
            newImage.setAttribute('src', altUrl);
            newImage.setAttribute('alt-src', currentUrl)
        }

        gifContainer.append(newImage)
    })
}