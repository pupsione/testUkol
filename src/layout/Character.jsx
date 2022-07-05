import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCharacter } from "../API";

const Character = () => {
    const { id } = useParams();
    const [char, setChar] = useState([])

    useEffect(function getChar() {
        getCharacter(id).then(data => setChar(data.data.results))
    }, [id])

    return (
        <div className="char container">
            {!char.length ? "null" : (
                <div className="char">
                    <div className="char-info">
                        <h3 className="char-name">{char[0].name}</h3>
                        <div className="char-container">
                            <img className="char-img" src={`${char[0].thumbnail.path}.${char[0].thumbnail.extension}`} alt="" />
                            <div className="char-descr">
                                <p>{char[0].description}</p>
                                <div className="char-listComics"> <h4>Comics :</h4>
                                    {char[0].comics.items.length ? char[0].comics.items.map(item => {
                                        return <span className="char-comics">{item.name}</span>
                                    }): 'Nothing'}
                                </div>
                            </div>
                        </div>

                        <ul>
                            <li className="char-detail"><span>{char[0].urls[0].type ? 'Detail' : char[0].urls[0].type} </span> : <a href={char[0].urls[0].url}>link</a></li>
                        </ul>
                    </div>
                    <div className="char-wrap">
                        <ul className="char-list comics">

                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export { Character }