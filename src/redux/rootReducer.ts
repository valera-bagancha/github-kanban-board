import { combineReducers } from 'redux'
import { repoInfoReducer } from './repoInfo/repoInfoReducer';
import { issuesInfoReducer } from './issuesInfo/issuesInfoReducer';

export const rootReducer = combineReducers({ issuesInfo: issuesInfoReducer, repoInfo: repoInfoReducer});