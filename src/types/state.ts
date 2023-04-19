import { IIssues } from './issues'
import { IRepo } from './repo'

export interface IState {
  issuesInfo: {
    issues: IIssues[]
    isPending: boolean
    errorMessage: boolean
  }
  repoInfo: {
    repo: IRepo
  }
}