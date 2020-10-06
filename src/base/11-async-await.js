export const getImage = async() => {

    try {

        const apiKey = 'DolBkzcEv3aFKGLmufRWLPYPE5jlR1qa';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const { data } = await response.json()
            
        const {url} = data.images.original;
        
        return url;

    } catch (error) {

        return 'No se encontro'

    }
        
}