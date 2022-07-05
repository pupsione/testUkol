import { useState, useEffect } from "react";
import { getAllCharacters } from "../API";
import { CharactersList } from "../components/CharactersList";
import { Search } from '../components/Search';

const Main = () => {
    const [characters, setCharacters] = useState([]);
    const [offset, setOffset] = useState(30);
    const [charactersFilter, setCharactersFilter] = useState([])

    const addMore = () => {
        setOffset(prev => prev + 10)
        getAllCharacters(offset).then(data => {
            setCharactersFilter(data.data.results)
            setCharacters(data.data.results)
        })
    }

    const getSearch = (searchKey) => {
        setCharactersFilter(characters.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase())))
    }

    useEffect(function getCharacters() {
        getAllCharacters().then(data => {
            setCharacters(data.data.results)
            setCharactersFilter(data.data.results)
        })
    }, [])

    return (
        <main className="main">
            <Search getSearch={getSearch} />
            {!characters.length ? 'Nothing' : <CharactersList characters={charactersFilter} />}
            <button className="moreBtn btn" onClick={() => addMore()}>Add more</button>
        </main>
    )
}
export { Main }