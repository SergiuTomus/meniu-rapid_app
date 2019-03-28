import { SELECT_RESTAURANT } from '../actions/actionTypes';
import placeImage1 from '../../assets/logo1.jpg';
import placeImage2 from '../../assets/logo2.jpg';
import placeImage3 from '../../assets/logo3.png';
import placeImage4 from '../../assets/logo4.png';
import placeImage5 from '../../assets/logo5.jpg';
import placeImage6 from '../../assets/logo6.jpg';
import placeImage7 from '../../assets/logo7.jpg';
import placeImage8 from '../../assets/logo8.jpg';
import placeImage9 from '../../assets/logo9.jpg';
import placeImage10 from '../../assets/logo10.png';

const initialState = {
  restaurants: [
    {
      key: Math.random().toString(),
      name: "Spartan",
      image: placeImage1
    },
    {
      key: Math.random().toString(),
      name: "Chicken Hut",
      image: placeImage2
    },
    {
      key: Math.random().toString(),
      name: "Jamore",
      image: placeImage3
    },
    {
      key: Math.random().toString(),
      name: "Chili Pistols",
      image: placeImage4
    },
    {
      key: Math.random().toString(),
      name: "Tacorama",
      image: placeImage5
    },
    {
      key: Math.random().toString(),
      name: "Aloro",
      image: placeImage6
    },
    {
      key: Math.random().toString(),
      name: "Spice Wallahs",
      image: placeImage7
    },
    {
      key: Math.random().toString(),
      name: "Pasta",
      image: placeImage8
    },
    {
      key: Math.random().toString(),
      name: "Bank Restaurant",
      image: placeImage9
    },
    {
      key: Math.random().toString(),
      name: "Trattoria",
      image: placeImage10
    },
      
  ],
  selectedRestaurant: null
};

const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: state.restaurants.find(restaurant => {
          return restaurant.key === action.restaurantKey;
        })
      };
    default:
      return state;
  }
};

export default restaurantsReducer;