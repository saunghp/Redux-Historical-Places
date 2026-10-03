import { configureStore } from "@reduxjs/toolkit";
import placesSliceReducer from "./placesSllice";

const places = configureStore({
    reducer:{
        places:placesSliceReducer
    }

})

export default places;