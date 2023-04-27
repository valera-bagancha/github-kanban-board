import { IIssues } from '../../types/issues'
import { ActionTypes } from './types'

const { ADD_ISSUES_INFO, IS_ISSUES_LOADING, ERROR_MESSAGE, CHANGE_STATUS, ADD_TO_EMPTY_STATUS } = ActionTypes

export const addIssuesInfo = (issues: IIssues[]) => ({
  type: ADD_ISSUES_INFO,
  payload: issues
})

export const isIssuesLoading = (isLoading: boolean) => ({
  type: IS_ISSUES_LOADING,
  payload: isLoading
})

export const errorMessage = (isError: boolean) => ({
  type: ERROR_MESSAGE,
  payload: isError
})

export const changeStatus = (startIssue: any, dropIndex: any, status: any) => {
  const newObjStatus = { ...startIssue, condition: status }

  return ({
    type: CHANGE_STATUS,
    payload: {
      newObjStatus,
      dropIndex,
      status
    }
  })
}


export const addToEmptyStatus = (status: any, issueId: any) => ({
  type: ADD_TO_EMPTY_STATUS,
  payload: {
    status,
    issueId
  }
})
