import { useState } from 'react';

function SearchBar({onSubmit}){
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault() // prevents the submit event triggering, and collecting all element information to make the network request.
        onSubmit(term);
    };

    const handleChange = (event) =>{
        setTerm(event.target.value);
    }

    return <div>
        <form onSubmit={handleFormSubmit}>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
}

export default SearchBar;