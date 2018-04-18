import { combineReducers } from 'redux';
import { reducer as mails } from './mails/reducer';

export const reducer = combineReducers({
    mails
});
