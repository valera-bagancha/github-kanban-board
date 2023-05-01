import { IRepo } from '../../types/repo'

export enum ActionTypes {
  ADD_REPO_INFO = 'ADD_REPO_INFO'
}

interface IAddRepoInfo {
  type: ActionTypes.ADD_REPO_INFO
  payload: IRepo
}

export interface IStateRepo {
  repo: IRepo | null
}

export type Action = IAddRepoInfo