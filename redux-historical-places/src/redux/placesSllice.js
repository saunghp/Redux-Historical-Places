import { createSlice } from "@reduxjs/toolkit";
const placesSlicer = {
    places:[
        {
            id:1,
            name:"Taunggyi",
            description:"Taunggyi is a city in Shan State, Myanmar. It is known for its cool climate, beautiful landscapes, and rich cultural heritage.",
            image:"https://cdn.digitalagencybangkok.com/file/client-cdn/gnlm/wp-content/uploads/2025/11/5-11-2025-ytg-1-1024x707.jpg",
            visited:false
        },
        {
            id:2,
            name:"Bagan",
            description:"Bagan is an ancient city in Myanmar, famous for its thousands of Buddhist temples, pagodas, and stupas. It is a UNESCO World Heritage Site and a popular tourist destination.",
            image:"https://i.natgeofe.com/n/95f6d0ed-f811-4fdd-a7e4-0f9deb74c083/Bagan2.jpg",
            visited:false
        },
        {
            id:3,
            name:"Mandalay",
            description:"Mandalay is the second-largest city in Myanmar and a major cultural and economic hub. It is known for its historic sites, including Mandalay Palace, monasteries, and traditional crafts.",
            image:"https://e0.pxfuel.com/wallpapers/394/203/desktop-wallpaper-travel-to-mandalay-the-ancient-capital-of-myanmar.jpg",
            visited:false
        },
        {
            id:4,
            name:"Inle Lake",
            description:"Inle Lake is a freshwater lake located in Shan State, Myanmar. It is famous for its floating villages, stilt houses, and unique leg-rowing fishermen.",
            image:"https://i.pinimg.com/originals/43/dc/d0/43dcd031e7a63b7260424262b0c3308b.jpg",
            visited:false
        },
        {
            id:5,
            name:"Ngapali Beach",
            description:"Ngapali Beach is a beautiful beach destination in Rakhine State, Myanmar. It is known for its pristine white sand, clear turquoise waters, and relaxed atmosphere.",
            image:"https://tse2.mm.bing.net/th/id/OIP.Xx7FUaoX_WfMMAhiEfSEFQHaEO?r=0&pid=Api&h=220&P=0",
            visited:false
        },
        {
            id:6,
            name:"Golden Rock (Kyaiktiyo Pagoda)",
            description:"The Golden Rock, also known as Kyaiktiyo Pagoda, is a famous Buddhist pilgrimage site in Mon State, Myanmar. It is a small pagoda built on top of a massive granite boulder covered with gold leaf.",
            image:"https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2d/10/c3.jpg",
            visited:false
        }   
    ]
};


export const placesSlice=createSlice({
    name: "places",
    initialState:placesSlicer,
    reducers:{
        toggleVisited:(state,action)=>{
            const place=state.places.find((p)=>p.id===action.payload);
            if(place){
                place.visited=!place.visited;
            }

        }
    }
});

export const {toggleVisited}=placesSlice.actions;
export default placesSlice.reducer;
