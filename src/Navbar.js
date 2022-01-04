import {NavLink} from 'react-router-dom';

const style = {
    width: "2em",
    margin: ".5em"

}

function Navbar() {

    return(
        <div>
            <NavLink 
             exact 
             to="/"
             activeStyle={{
                fontweight: "bold",
                color: "green"
            }}
            style={style}
            >
            Home
            </NavLink>

            <NavLink
            exact 
            to="/plants/new"
            activeStyle={{
                fontweight: "bold",
                color: "green"
            }}
            style={style}
            >
            Add New Plant
            </NavLink>

            <NavLink
            exact 
            to="/plants/favorites"
            activeStyle={{
                fontweight: "bold",
                color: "green"
            }}
            style={style}
            >
            Favorites
            </NavLink>

        </div>
        
    )
}

export default Navbar;