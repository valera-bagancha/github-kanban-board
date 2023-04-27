import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import localStorage from 'redux-persist/es/storage';

import { repoInfoReducer } from './repoInfo/repoInfoReducer';
import { issuesInfoReducer } from './issuesInfo/issuesInfoReducer';

const persistConfig = {
  key: 'root',
  storage: localStorage,
  whiteList: ['issuesInfo']
}

// export const rootReducer = combineReducers({ issuesInfo: issuesInfoReducer, repoInfo: repoInfoReducer});

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    issuesInfo: issuesInfoReducer, 
    repoInfo: repoInfoReducer
  })
)