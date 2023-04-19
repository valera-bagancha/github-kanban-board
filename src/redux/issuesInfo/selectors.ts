import { createSelector } from 'reselect'

import { IState } from '../../types/state'

export const issuesSelector = (state: IState) => state.issuesInfo.issues
export const loaderSelector = (state: IState) => state.issuesInfo.isPending
export const errorMessageSelector = (state: IState) => state.issuesInfo.errorMessage

export const inProgressIssueSelector = createSelector(issuesSelector, issues => 
  issues.filter(issue => issue.state === 'open')
)

export const doneIssueSelector = createSelector(issuesSelector, issues => 
  issues.filter(issue => issue.state === 'closed')
)

export const todoIssueSelector = createSelector(issuesSelector, issues => 
  issues.filter(issue => issue.created_at === issue.updated_at)
)

export const allIssuesSelector = createSelector(inProgressIssueSelector, doneIssueSelector, todoIssueSelector,
  (inProgressIssue, doneIssue, todoIssue) => ({
    'ToDo': todoIssue,
    'In Progress': inProgressIssue,
    'Done': doneIssue
  })
)