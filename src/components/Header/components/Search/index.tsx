import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { delay } from '../../../../utils/delay';
import repoService from '../../../../api/repoService';
import issueService from '../../../../api/issueService';
import { addRepoInfo } from '../../../../redux/repoInfo/actionCreators';
import { addIssuesInfo, errorMessage, isIssuesLoading } from '../../../../redux/issuesInfo/actionCreators';
import { IIssues } from '../../../../types/issues';


export const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const com = value.indexOf('.com')
  const str = value.slice(com + 5).split('/')
  const [repo, name] = str
  const introStr = value.split('//')[0]

  const onSearch = () => {
    if (!value) return
    dispatch(isIssuesLoading(true))

    delay(1500).then(async () => {
      try {
        const issueInfo = await issueService.getIssueInfo(repo, name, introStr)
        const repoInfo = await repoService.getRepoInfo(repo, name, introStr)

        dispatch(isIssuesLoading(false))
        dispatch(errorMessage(false))

        if (!issueInfo) return
        if (!repoInfo) return

        const currentIssues = issueInfo.map((issue: IIssues) => {

          if (issue.state === 'open') {
            return { ...issue, condition: 'In Progress' }
          }
          if (issue.state === 'closed') {
            return { ...issue, condition: 'Done' }
          }
          if (issue.created_at === issue.updated_at) {
            return ({ ...issue, condition: 'ToDo' })
          }
        })

        if (currentIssues) return
         
          dispatch(addRepoInfo(repoInfo))
          dispatch(addIssuesInfo(currentIssues))
        
          
        
      } catch (error) {

        dispatch(errorMessage(true))
        dispatch(isIssuesLoading(false))
      }
    })
  }


  return (
    <div className="search">
      <input className="input" type="text" placeholder="Enter repo URL" value={value} onChange={(e) => setValue(e.target.value)} />
      <button className="button" onClick={onSearch}>Load issues</button>
    </div>
  )
}