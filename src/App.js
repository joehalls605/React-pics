import {useState} from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App(){

    const [images, setImages] = useState([]);

    // HANDLES THE USER'S SUBMISSION OF TERM.
    // PASSING THIS DOWN TO SEARCHBAR
    const handleSubmit = async (term) => {
        const result = await searchImages(term); // Don't continue until it has got the list of images
        setImages(result);
    }

    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
    </div>
}

export default App;