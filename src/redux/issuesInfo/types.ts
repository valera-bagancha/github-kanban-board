import { IAddToEmptyStatusIssue, IChangeStatusIssue, IIssues } from '../../types/issues'

export enum ActionTypes {
  ADD_ISSUES_INFO = 'ADD_ISSUES_INFO',
  IS_ISSUES_LOADING = 'IS_ISSUES_LOADING',
  ERROR_MESSAGE = 'ERROR_MESSAGE',
  CHANGE_STATUS = 'CHANGE_STATUS',
  ADD_TO_EMPTY_STATUS = 'ADD_TO_EMPTY_STATUS'
}

interface IAddIssuesInfo {
  type: ActionTypes.ADD_ISSUES_INFO
  payload: IIssues[]
}

interface IIsIssuesLoading {
  type: ActionTypes.IS_ISSUES_LOADING
  payload: boolean
}

interface IErrorMessage {
  type: ActionTypes.ERROR_MESSAGE
  payload: boolean
}

export interface IStateIssues {
  issues: IIssues[]
  isPending: boolean
  errorMessage: boolean
}

export interface IChangeStatus {
  type: ActionTypes.CHANGE_STATUS
  payload: IChangeStatusIssue
}

export interface IAddToEmptyStatus {
  type: ActionTypes.ADD_TO_EMPTY_STATUS
  payload: IAddToEmptyStatusIssue
}

export type Action = IAddIssuesInfo | IIsIssuesLoading | IErrorMessage | IChangeStatus | IAddToEmptyStatus