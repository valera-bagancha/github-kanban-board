import { IIssues } from '../types/issues';

export const insert = (issues: IIssues[], dropIndex: number, issue: IIssues) => {
  const firstHalfIssues = issues.slice(0, dropIndex)
  const secondHalfIssues = issues.slice(dropIndex, issues.length)

  const allIssues = [...firstHalfIssues, issue, ...secondHalfIssues]

  return allIssues
}