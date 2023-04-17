import { ActionTypes } from './types'

const { ADD_ISSUES_INFO } = ActionTypes

export const addIssuesInfo = (issues: any) => ({
  type: ADD_ISSUES_INFO,
  payload: issues
})