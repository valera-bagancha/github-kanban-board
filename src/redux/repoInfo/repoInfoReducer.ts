import { Action, ActionTypes, IStateRepo } from './types'

const initialState = {
  repo: null
}

export const repoInfoReducer = (state: IStateRepo = initialState, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_REPO_INFO:
      return {
        repo: payload
      }
    
    default: 
      return state
  }
}