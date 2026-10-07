import PlaceCard from "./components/PlaceCard.jsx";
import SuggestPlace from "./components/SuggestPlace.jsx";

function App() {
  return (
    <>
    <div className="bg-gray-700 w-full h-full m-2">
      <h2 className="text-2xl font-bold  text-white p-4">Historical Places</h2>
      <SuggestPlace/>
      <h2 className="text-2xl font-bold  text-white p-4">All Historical Places</h2>
      <PlaceCard />
    </div>
  
    </>
  );
}

export default App;
