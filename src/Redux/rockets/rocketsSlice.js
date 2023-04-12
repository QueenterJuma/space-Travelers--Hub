import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/rockets';

const FETCH_ROCKETS = 'space-travelers-react-redux/rockets/fetchRockets';

const initialState = [];

// Add a reducer
export default function rocketsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ROCKETS:
            return action.payload;
        default:
            return state;
    }
}