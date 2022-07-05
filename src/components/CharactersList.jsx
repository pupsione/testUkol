import { CharactersItem } from "./CharactersItem"

const CharactersList = (props) => {
    const { characters = []} = props;
    return (
        <ul className="list">
            {characters.map((item) => {
                return <CharactersItem {...item} key={item.id}/>
            })}
        </ul>
    )
}

export { CharactersList }