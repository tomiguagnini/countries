import {
    GET_ALL_COUNTRIES,
    GET_COUNTRIES_BY_NAME,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    COUNTRY_DETAIL,
    FILTER_BY_CONTINENT,
    RESET,
    GET_ACTIVITIES,
    FILTER_BY_ACTIVITY,
    ORDER_BY_NAME_DESC,
    ORDER_BY_POPULATION_DESC,
} from "../actions";

const initialState = {
    countries: [],
    countryDetail: {},
    countriesFiltered: [],
    activities: [],
};

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: [...payload],
            };
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: payload,
            };
        case COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: payload,
            };
        case ORDER_BY_NAME:
            return {
                ...state,
                countries: state.countries.sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
                countriesFiltered: state.countriesFiltered.sort((a, b) =>
                    a.name.localeCompare(b.name)
                ),
            };
        case ORDER_BY_NAME_DESC:
            return {
                ...state,
                countries: state.countries.sort((a, b) =>
                    b.name.localeCompare(a.name)
                ),
                countriesFiltered: state.countriesFiltered.sort((a, b) =>
                    b.name.localeCompare(a.name)
                ),
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
                ),
                countriesFiltered: state.countriesFiltered.sort((a, b) =>
                    a.population < b.population
                        ? 1
                        : a.population > b.population
                        ? -1
                        : 0
                ),
            };
            case ORDER_BY_POPULATION_DESC:
                return {
                    ...state,
                    countries: state.countries.sort((a, b) =>
                        a.population > b.population
                            ? 1
                            : a.population < b.population
                            ? -1
                            : 0
                    ),
                    countriesFiltered: state.countriesFiltered.sort((a, b) =>
                        a.population > b.population
                            ? 1
                            : a.population < b.population
                            ? -1
                            : 0
                    ),
                };
        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countriesFiltered: state.countries.filter(
                    (c) => c.continent === payload
                ),
            };
        case FILTER_BY_ACTIVITY:
            return {
                ...state,
                countriesFiltered: state.countries.filter((c) => {
                    return (
                        c.Activities.find((a) => a.id === payload) !== undefined
                    );
                }),
            };
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: [...payload],
            };
        case RESET:
            return {
                ...state,
                countries: [...payload],
                countriesFiltered: [],
            };
        default:
            return state;
    }
};

export default rootReducer;
