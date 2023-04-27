import { createSelector } from 'reselect'

import { IState } from '../../types/state'

export const issuesSelector = (state: IState) => state.issuesInfo.issues
export const loaderSelector = (state: IState) => state.issuesInfo.isPending
export const errorMessageSelector = (state: IState) => state.issuesInfo.errorMessage

export const inProgressIssueSelector = createSelector(issuesSelector, issues =>
  issues.filter(issue => issue.condition === 'In Progress')
)

export const doneIssueSelector = createSelector(issuesSelector, issues =>
  issues.filter(issue => issue.condition === 'Done')
)

export const todoIssueSelector = createSelector(issuesSelector, issues =>
  issues.filter(issue => issue.condition === 'ToDo')
)

export const allIssuesSelector = createSelector(inProgressIssueSelector, doneIssueSelector, todoIssueSelector,
  (inProgressIssue, doneIssue, todoIssue) => ([
    {title: 'ToDo', id: 1, issue: todoIssue },
    {title: 'In Progress', id: 2, issue: inProgressIssue},
    {title: 'Done', id: 3, issue: doneIssue }
  ])
)