import { combineReducers } from 'redux';
import timeSlice from '../slices/timeSlice/slice';
import langSlice from '../slices/langSlice/slice';

const rootReducer = combineReducers({
    time: timeSlice,
    lang: langSlice,
});

export default rootReducer;