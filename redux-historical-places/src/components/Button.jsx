import { useDispatch } from "react-redux";
import { toggleVisited, selectedPlace } from "../redux/placesSllice.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLocationPin } from "react-icons/fa6";

function Button({ place, big }) {
  const dispatch = useDispatch();
  return (
    <div className={`flex ${big?"justify-center" : "justify-between"} items-center gap-4 mb-2 mt-auto `}>
    
        <button onClick={() => dispatch(toggleVisited(place.id))}
            className="flex justify-between items-center gap-1 h-10  bg-cyan-700 p-2 rounded-lg text-white font-medium hover:bg-cyan-900 transition duration-300 ease-in-out">
          <FaLocationPin /> {place.visited ? "Unmark as Visited" : "Mark as Visited"}
        </button>

        {!big && (
            <button onClick={() => dispatch(selectedPlace(place.id))}
             className="flex gap-1 justify-between items-center h-10  bg-cyan-700 p-2 rounded-lg text-white font-medium 
      hover:bg-cyan-900 transition duration-300 ease-in-out
      ">
          View Details <FaArrowRightLong />
        </button>
        )}
    </div>
  );
}

export default Button;
