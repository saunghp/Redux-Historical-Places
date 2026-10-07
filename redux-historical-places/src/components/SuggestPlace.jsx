import { useDispatch, useSelector } from "react-redux";
import { suggestRandomPlace, clearSuggestion } from "../redux/placesSllice.js";
import Card from "./Card.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";

function SuggestPlace() {
  const dispatch = useDispatch();
  const suggestedPlace = useSelector((state) =>
    state.places.places.find((p) => p.id === state.places.suggestId)
  );

  return (
    <div className="p-4">
      <button
        onClick={() => dispatch(suggestRandomPlace())}
        className="bg-cyan-700 hover:bg-cyan-900 text-white font-normal p-2 rounded-lg"
      >
        Suggest Random Place
      </button>

      {suggestedPlace && (
        <div className="max-w-sm mx-auto mt-4">
            <button onClick={()=>dispatch(clearSuggestion())}
                className="flex items-center gap-1 text-white hover:text-cyan-300 mb-2">
                <FaArrowLeftLong /> Back
            </button>
          <Card place={suggestedPlace} />
        </div>
      )}
    </div>
  );
}

export default SuggestPlace;