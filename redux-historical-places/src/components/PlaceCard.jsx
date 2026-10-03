import { useDispatch, useSelector } from "react-redux"
import { toggleVisited } from "../redux/placesSllice.js";


function PlaceCard() {
    const place=useSelector((state)=>state.places.places)
    const dispatch=useDispatch();
    
  return (
    <>
      <h1>Historical Places</h1>
        {place.map((place,index)=>{
          return (
            <div >
                <div key={index}>
                  <h2>{place.name}</h2>
                  <img src={place.image} alt="Myanmar's historical place" width="300px" height="200px"/>
                  <p>{place.description}</p>
                  <p style={{color: place.visited ? "green" : "red"}}>
                    {place.visited ? "Visited" : "Not visited"}
                  </p>
                  <button onClick={()=>dispatch(toggleVisited(place.id))}>
                    {place.visited ? "Unmark as  Visited" : "Mark as Visited"}
                  </button>
                  <br/>
                </div>
                <br/>
            </div>
          )
        })}
    </>
  )
}

export default PlaceCard
