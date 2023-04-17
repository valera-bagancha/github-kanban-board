export enum ActionTypes {
  ADD_ISSUES_INFO = 'ADD_ISSUES_INFO'
}

interface IAddIssuesInfo {
  type: ActionTypes.ADD_ISSUES_INFO
  payload: any
}

export type Action = IAddIssuesInfo