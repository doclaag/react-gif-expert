
export const getGifs = async (category) => {

    try{

        const apiKey = import.meta.env.VITE_API_KEY;

        const limit = 10;

        // console.log(apiKey);
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        const gifs = data.map((img) => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }));
        
        // console.log(gifs);
        
        return gifs;
    }catch(error){
        console.error("Error fetching gifs:", error);
        throw error; 
    }
};