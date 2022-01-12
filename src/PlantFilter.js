function PlantFilter({handelChange}) {
    return(
        <div style={{textAlign: 'center'}}>
            <select style ={{color: '#006A4E', fontSize: '15px'}} onChange={handelChange}>
                <option  value="All">All Plants</option>
                <option value="Money Tree">Money Tree</option>
                <option value="Bromeliad Summer">Bromeliad Summer</option>
                <option value="Prickly Pear Cactus">Prickly Pear Cactus</option>
                <option value="Mini Lemon Cypress">Mini Lemon Cypress</option>
                <option value="Sansevieria">Sansevieria</option>
                <option value="Bromeliad Pineapple">Bromeliad Pineapple</option>
                <option value="Little Fiddle Leaf Fige">Little Fiddle Leaf Fig</option>
                <option value="Tabletop Norfolk Pine">Tabletop Norfolk Pine</option>
                <option value="Monstera">Monstera</option>
                <option value="Ficus Umbellata">Ficus Umbellata</option>
            </select>
        </div>
    )
}

export default PlantFilter;