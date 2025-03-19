import SearchBar from './components/SearchBar';

function App(){

    // HANDLES THE USER'S SUBMISSION OF TERM.
    // PASSING THIS DOWN TO SEARCHBAR
    const handleSubmit = (term) => {
        console.log("Do a search with", term);
    }

    return <div>
        <SearchBar onSubmit={handleSubmit}/>
    </div>
}

export default App;