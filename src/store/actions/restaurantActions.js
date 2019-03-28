import { SELECT_RESTAURANT, SHOW_CONTACT } from './types';

export const selectRestaurant = (key) => {
    return {
        type: SELECT_RESTAURANT,
        restaurantKey: key
    };
};

export const showContact = () => {
    return {
        type: SHOW_CONTACT
    };
};