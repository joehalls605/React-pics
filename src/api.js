import axios from 'axios';

const searchImages = async (term) =>{
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers:{
            Authorization: "Client-ID 0OksM36rfOnZwC6jbZ2dYk5TjexA0-jzF_xSbSAvyH0"
        },
        params:{
            query: term,
        }
    });
    return response.data.results;
}

export default searchImages;