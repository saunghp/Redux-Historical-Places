import { useSelector } from "react-redux";
import Card from "./Card";

function Places() {
  const places = useSelector((state) => state.places.places);

  return (
    <>
      {places.map((place) => (
        <Card key={place.id} place={place} />
      ))}
    </>
  );
}

export default Places;
