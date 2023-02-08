import {
    GET_ALL_COUNTRIES,
    GET_COUNTRIES_BY_NAME,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
} from "../actions";

const initialState = {
    countries: [],
};

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: [...state.countries, ...payload],
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: [...payload],
            };
        // case CREATE_FUTBOLISTA:
        //    return {
        //       ...state,
        //       futbolistas:[...state.futbolistas, action.payload]
        //    }
        case ORDER_BY_NAME:
            return {
                ...state,
                countries: state.countries.sort((a, b) =>
                    a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                )
            };
        case ORDER_BY_POPULATION:
            return {
                ...state,
                countries: state.countries.sort((a, b) =>
                    a.population < b.population
                        ? 1
                        : a.population > b.population
                        ? -1
                        : 0
                )
            };
        default:
            return state;
    }
};

export default rootReducer;
