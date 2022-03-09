import React from "react"

function Search({onSearch}) {
    return (
        <div>
            <input type="text" onChange={(event) => onSearch(event.target.value.toLocaleLowerCase())} placeholder="Search..."/>
        </div>
    );
}

export default Search;