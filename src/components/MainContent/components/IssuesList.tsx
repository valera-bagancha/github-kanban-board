import { issueStatus } from '../../../constants/issueStatus'
import { StatusIssue } from './StatusIssue'

export const IssuesList = () => {
  return (
    <>
      {issueStatus.map((title: any) => (
        <StatusIssue key={title.title} title={title.title} />
      ))}
    </>
  )
}