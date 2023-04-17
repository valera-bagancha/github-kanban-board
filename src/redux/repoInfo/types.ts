export enum ActionTypes {
  ADD_REPO_INFO = 'ADD_REPO_INFO'
}

interface IAddRepoInfo {
  type: ActionTypes.ADD_REPO_INFO
  payload: any
}

export type Action = IAddRepoInfo