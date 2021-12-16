//set default image if no image is provided
function NewPlantForm() {

    return(
        <form style={{display:"flex", flexDirection:"column"}}>
            <label>Name</label>
            <input type="text"/>
            <label>Size</label>
            <input type="text"/>
            <label>Sun</label>
            <input type="text"/>
            <label>Difficulty</label>
            <input type="text"/>
            <label>Image</label>
            <input type="file"/>
        </form>
    )
}

export default NewPlantForm;