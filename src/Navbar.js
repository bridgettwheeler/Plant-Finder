import {NavLink} from 'react-router-dom';
import {Nav} from './StyledComponents';

const style = {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '25px',
    color: "#006A4E",
    

}

function Navbar() {

    return(
        <div>
            <NavLink 
             exact 
             to="/"
             activeStyle={{
                fontweight: "bold",
                color: "#8FBC8B"
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
                color: "#8FBC8B"
            }}
            style={style}
            >
            Add New Plant
            </NavLink>

            <NavLink
            exact 
            to="/plants/search"
            activeStyle={{
                fontweight: "bold",
                color: "#8FBC8B"
            }}
            style={style}
            >
            Text Counter
            </NavLink>

            <NavLink
            exact 
            to="/plants/favorites"
            activeStyle={{
                fontweight: "bold",
                color: "#8FBC8B"
            }}
            style={style} 
            >
            Favorites
            </NavLink>

        </div>
        
    )
}

export default Navbar;