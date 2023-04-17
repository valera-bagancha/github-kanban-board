import { Action, ActionTypes } from './types'

const initialState = {
  issues: null
}

export const issuesInfoReducer = (state: any = initialState, {type, payload}: Action) => {
  switch (type) {
    case ActionTypes.ADD_ISSUES_INFO:
      return {
        issues: payload
      }
    
    default: 
      return state
  }
}