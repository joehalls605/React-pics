function SearchBar({ onSubmit }){

    // HANDLE THE USER'S CLICKING OF THE BUTTON
    // AND CALL ONSUBMIT TO FLOW UP TO HANDLESUBMIT IN PARENT COMPONENT
    const handleClick = () =>{

        onSubmit("cars");
    }
    return <div>
        <input />
        <button onClick={handleClick}>Click Me!</button>
    </div>
}

export default SearchBar;