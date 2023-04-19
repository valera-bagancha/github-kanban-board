import { IIssues } from '../../types/issues'

export enum ActionTypes {
  ADD_ISSUES_INFO = 'ADD_ISSUES_INFO',
  IS_ISSUES_LOADING = 'IS_ISSUES_LOADING',
  ERROR_MESSAGE = 'ERROR_MESSAGE'
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


export type Action = IAddIssuesInfo | IIsIssuesLoading | IErrorMessage