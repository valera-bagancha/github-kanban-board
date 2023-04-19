import { IIssues } from '../../types/issues'
import { ActionTypes } from './types'

const { ADD_ISSUES_INFO, IS_ISSUES_LOADING, ERROR_MESSAGE  } = ActionTypes

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