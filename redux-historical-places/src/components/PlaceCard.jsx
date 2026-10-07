import Places from "./Places";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card.jsx";
import { IoCloseCircleSharp } from "react-icons/io5";
import { selectedPlace as selectPlace } from "../redux/placesSllice.js";

function PlaceCard() {
  const selectedPlace = useSelector((state) =>
    state.places.places.find((p) => p.id === state.places.selectedId),
  );
  const dispatch = useDispatch();

  return (
    <>
      {selectedPlace && (
        <div className="fixed inset-0 bg-black/50  flex justify-center items-center z-50 p-4"
            onClick={() => dispatch(selectPlace(null))}>

          
            <div className="relative w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <button 
                onClick={()=>dispatch(selectPlace(null))}
                className="absolute top-2 right-2 text-3xl text-gray-500 hover:text-black z-10 ">
                    <IoCloseCircleSharp />
                </button>
                <Card place={selectedPlace} big={true} />
            </div>
        </div>
      )}
               
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full h-full">
            <Places />
        </div>
    
        </>
  );
}

export default PlaceCard;
