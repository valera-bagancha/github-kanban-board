import { insert } from '../../utils/insert'
import { Action, ActionTypes, IStateIssues } from './types'

const initialState = {
  issues: [],
  isPending: false,
  errorMessage: false,
}

export const issuesInfoReducer = (state: IStateIssues = initialState, { type, payload }: Action) => {
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

    case ActionTypes.CHANGE_STATUS:
      return {
        ...state,
        issues: insert(state.issues.filter((issue) => (issue.id !== payload.newObjStatus.id)), payload.dropIndex, payload.newObjStatus),
      }

    case ActionTypes.ADD_TO_EMPTY_STATUS:
      return {
        ...state,
        issues: state.issues.map((issue) => issue.id === payload.issueId ? ({...issue, condition: payload.status}) : issue)
      }

    default:
      return state
  }
}