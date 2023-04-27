import { StatusIssue } from './StatusIssue'
import { useDispatch, useSelector } from 'react-redux'
import { allIssuesSelector, issuesSelector } from '../../../redux/issuesInfo/selectors'
import { useCallback, useState } from 'react'
import { IDataIssue, IIssues } from '../../../types/issues'
import { addToEmptyStatus, changeStatus } from '../../../redux/issuesInfo/actionCreators'

export const IssuesList = () => {
  const [movedIssue, setMovedIssue] = useState<any>(null)

  const dispatch = useDispatch()

  const allIssues = useSelector(allIssuesSelector)
  const issues = useSelector(issuesSelector)  


  console.log('allIssues', allIssues);
  

  const dragOverHandler = useCallback((e: any) => {
    e.preventDefault()
    if (e.target.className == 'issue') {
      e.target.style.boxShadow = '0 0 30px grey'
    }
  },[])

  const dragLeaveHandler = useCallback((e: any) => {
    e.target.style.boxShadow = 'none'
  }, [])

  const dragStartHandler = useCallback((id: number, issue: IIssues) => {
    setMovedIssue(issue)
  }, [])


  const dragEndHandler = useCallback((e: any, condition: string, id: number) => {
   
  }, [])

  const dropHandler = useCallback((e: any, condition: string, dataIssue: IIssues, isEmpty: any) => {  
    e.target.style.boxShadow = 'none'

    // const isEmpty = !currentStatusIssues.length
    const dropIndex = issues.indexOf(dataIssue)

    if (!isEmpty) {
      dispatch(changeStatus(movedIssue, dropIndex, condition))
    } 
    
  }, [movedIssue, dispatch])

  const dropCardHandler = useCallback((e: any, condition: any, isEmpty: any) => {

    if (isEmpty) {
      dispatch(addToEmptyStatus(condition, movedIssue.id))
    }
    
  }, [movedIssue])


  return (
    <>
      {allIssues.map((status: any) => (
        <StatusIssue 
        key={status.id} 
        title={status.title} 
        issues={status.issue} 
        dragOverHandler={dragOverHandler} 
        dragLeaveHandler={dragLeaveHandler} 
        dragEndHandler={dragEndHandler} 
        dropHandler={dropHandler} 
        dragStartHandler={dragStartHandler} 
        dropCardHandler={dropCardHandler}        
        />
      ))}
    </>
  )
}