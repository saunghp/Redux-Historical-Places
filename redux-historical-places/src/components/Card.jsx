import { useDispatch } from "react-redux";
import { selectedPlace } from "../redux/placesSllice.js";
import Button from "./Button.jsx";  
function Card({ place, big }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer">
      <h2 className="font-bold text-xl text-center p-2">{place.name}</h2>
      <img
        src={place.image}
        alt="Myanmar's historical places"
        className={`w-full object-cover rounded-lg ${big ? "h-auto" : "h-48"}`}
        onClick={() => {
            dispatch(selectedPlace(place.id));
        }}
      />
      <p className="text-center p-2">{place.description}</p>
      <p className={`text-center p-2 ${place.visited ? "text-green-500" : "text-red-500"}`}>
        {place.visited ? "Visited" : "Not visited"}
      </p>
      <Button place={place} big={big}/>
    </div>
  );
}

export default Card;