import { IRepo } from '../../types/repo'
import { ActionTypes } from './types'

const { ADD_REPO_INFO } = ActionTypes

export const addRepoInfo = (repo: any) => ({
  type: ADD_REPO_INFO,
  payload: repo
})