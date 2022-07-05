import { useState } from "react";

const Search = (props) => {
    const { getSearch = Function.prototype } = props;

    const [search, setSearch] = useState('');

    const handleInput = (e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="search">
            <input type="search" placeholder="Search character" value={search} onChange={handleInput}/>
            <button className="btn" onClick={() => getSearch(search)}>Go</button>
        </div>
    )
}

export { Search }