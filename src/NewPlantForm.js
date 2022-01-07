import {useState} from "react";
import {useHistory} from 'react-router-dom';


function NewPlantForm({handleAddPlant}) {
    const history = useHistory()
    const [newPlant, setNewPlant] = useState({
        name: "",
        size: "",
        sun: "",
        difficulty: "",
        image: "",
      })

    const handleChange = e => {
        setNewPlant(plant => ({...plant, [e.target.name]: e.target.value}))

    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch(`http://localhost:3000/house_plants`, {
        method: 'POST',
        body: JSON.stringify(newPlant),
        headers: {"Content-Type": "application/json"}
        })
        handleAddPlant(newPlant)

        setNewPlant({
            name: "",
            size: "",
            sun: "",
            difficulty: "",
            image: "",
          })
    history.push('/')
    }

    return(
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
            <label >Name</label>
            <input name="name" onChange={handleChange} type="text" value={newPlant.name}/>
            <label>Size</label>
            <input name="size" onChange={handleChange} type="text" value={newPlant.size}/>
            <label>Sun</label>
            <input name="sun" onChange={handleChange} type="text" value={newPlant.sun}/>
            <label>Difficulty</label>
            <input name="difficulty" onChange={handleChange} type="text" value={newPlant.difficulty}/>
            <label>Image URL</label>
            <input name="image" onChange={handleChange} type="text" value={newPlant.image}/>
            <input type="submit"/>
        </form>
    )
}

export default NewPlantForm;