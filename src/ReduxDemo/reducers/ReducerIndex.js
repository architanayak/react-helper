import {combineReducers} from 'redux';
import signUpReducer from './SignUpReducer'

export const rootreducer = combineReducers({
    signUp : signUpReducer
})