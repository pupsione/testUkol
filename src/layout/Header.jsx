import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <Link to='/' className="header-name">Marvel App</Link>
        </div>
    )
}

export {Header}