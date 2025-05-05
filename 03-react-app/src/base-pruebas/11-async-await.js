
export const getImagen = async() => {

    try {

        const apiKey = 'jNfNvfWe55vxpqXfaLO0YzuIbw0JHu5G';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await respuesta.json();
        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No se encontro la imagen';
    }
    
    
    
}

