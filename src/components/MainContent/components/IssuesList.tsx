import { StatusIssue } from './StatusIssue'
import { IIssueStatus, issueStatus } from '../../../constants/issueStatus'
import { useSelector } from 'react-redux'
import { allIssuesSelector } from '../../../redux/issuesInfo/selectors'
 
export const IssuesList = () => {
  const allIssues = useSelector(allIssuesSelector)
    
  console.log(Object.entries(allIssues));
  

  return (
    <>
    {Object.entries(allIssues).map((title: any) => (
        <StatusIssue key={title} title={title[0]} issues={title[1]}/>
      ))}
      {/* {issueStatus.map((title: IIssueStatus) => (
        <StatusIssue key={title.title} title={title.title} />
      ))} */}
    </>
  )
}