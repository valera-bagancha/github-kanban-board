import { StatusIssue } from './StatusIssue'
import { useDispatch, useSelector } from 'react-redux'
import { allIssuesSelector, issuesSelector } from '../../../redux/issuesInfo/selectors'
import { useCallback, useState, SyntheticEvent } from 'react'
import { IAllIssues, IIssues } from '../../../types/issues'
import { addToEmptyStatus, changeStatus } from '../../../redux/issuesInfo/actionCreators'

export const IssuesList = () => {
  const [movedIssue, setMovedIssue] = useState<IIssues | null>(null)

  const dispatch = useDispatch()

  const allIssues = useSelector(allIssuesSelector)
  
  const issues = useSelector(issuesSelector)  

  const dragOverHandler = useCallback((e: SyntheticEvent<HTMLLIElement>) => {
    e.preventDefault()

    const target = e.target as HTMLElement;

    if (target.className == 'issue') {
      target.style.boxShadow = '0 0 30px grey'
    }
  },[])

  const dragLeaveHandler = useCallback((e: SyntheticEvent<HTMLLIElement>) => {
    const target = e.target as HTMLElement;

    target.style.boxShadow = 'none'
  }, [])

  const dragStartHandler = useCallback((issue: IIssues) => {
    setMovedIssue(issue)
  }, [])

  const dropHandler = useCallback((e: SyntheticEvent<HTMLLIElement>, condition: string, dataIssue: IIssues, isEmpty: boolean) => {  
    const target = e.target as HTMLElement;

    target.style.boxShadow = 'none'

    const dropIndex = issues.indexOf(dataIssue)

    if (!movedIssue) return

    if (!isEmpty) {
      dispatch(changeStatus(movedIssue, dropIndex, condition))
    } 
    
  }, [movedIssue, dispatch])

  const dropCardHandler = useCallback((e: React.DragEvent<HTMLUListElement>, condition: string, isEmpty: boolean) => {
    if (!movedIssue) return

    if (isEmpty) {
      dispatch(addToEmptyStatus(condition, movedIssue.id))
    }
    
  }, [movedIssue])


  return (
    <>
      {allIssues.map((status: IAllIssues) => (
        <StatusIssue 
        key={status.id} 
        title={status.title} 
        issues={status.issue} 
        dragOverHandler={dragOverHandler} 
        dragLeaveHandler={dragLeaveHandler} 
        dropHandler={dropHandler} 
        dragStartHandler={dragStartHandler} 
        dropCardHandler={dropCardHandler}        
        />
      ))}
    </>
  )
}