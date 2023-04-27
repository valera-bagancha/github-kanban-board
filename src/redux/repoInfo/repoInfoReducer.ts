import { IState } from '../../types/state'
import { Action, ActionTypes, IStateRepo } from './types'

const initialState = {
  repo: {}
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