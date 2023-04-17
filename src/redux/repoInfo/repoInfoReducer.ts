import { Action, ActionTypes } from './types'

const initialState = {
  repo: null
}

export const repoInfoReducer = (state: any = initialState, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_REPO_INFO:
      return {
        repo: payload
      }
    
    default: 
      return state
  }
}