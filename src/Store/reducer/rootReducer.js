import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import patient from './patient.reducer';

const rootReducer = combineReducers({
    authReducer,
    patient
});

export default rootReducer;