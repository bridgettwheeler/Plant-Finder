
//What i want to do is filter through plantCard and send a patch request for only the ids/cards that have a filled in heart. so the request will not have a specific id but rather if a heart is filled in the patch changes "liked:true". I am thinking I need a state variable that will capture all the "likedPlants" then map through those and fetch using the id/key? idk im confused...

function PlantCard({plant:{image,name,size,sun,difficulty}}) {
    //const [likedPlants, setLikedPlants] = useState(plants)
    const handleLike = e => {
        e.target.innertext = (e.target.innerText === "♡") ? e.target.innerText = "♥" : e.target.innerText ="♡"

        //fetch(http://localhost:3000/house_plants/{id}, {
        //method: ‘PATCH’,
        //body: JSON.stringify({
        //liked: true
       //}),
        //headers: {“Content-type”: “application/json;”}
        //})

        //.then(response => response.json())
        //.then(json => console.log(json))

    
    }
    

    return(
        <div style={{border:"solid", width:"300px", textAlign:"center"}}>
            <img alt="plant pic" src={window.location.origin + image} style={{width:"200px"}}/>
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Sun Exposure: {sun}</p>
            <p>Difficulty Level: {difficulty}</p>
            <p style={{color: "red"}} id="heart" onClick={handleLike}>&#9825;</p>
        </div>

    )
}
export default PlantCard;