import { Action, ActionTypes } from './types'

const initialState = {
  issues: [],
  isPending: false,
  errorMessage: false
}

export const issuesInfoReducer = (state: any = initialState, { type, payload }: Action) => {
  switch (type) {
    case ActionTypes.ADD_ISSUES_INFO:
      return {
        ...state,
        issues: payload
      }

    case ActionTypes.IS_ISSUES_LOADING:
      return {
        ...state,
        isPending: payload
      }

    case ActionTypes.ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: payload
      }

    default:
      return state
  }
}