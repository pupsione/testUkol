import { Link } from "react-router-dom";

const CharactersItem = (props) => {
    const { name, thumbnail, id } = props

    return (
        <Link to={`/characters/${id}`} href="#">
            <div className="item" >
                <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
                <div className="item-wrap">
                    <span className="item-name">{name}</span>

                    <div className="card-action">
                        <Link to={`/characters/${id}`} href="#" className="item-btn">More</Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export { CharactersItem }