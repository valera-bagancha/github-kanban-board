import { useState } from 'react'
import { useDispatch } from 'react-redux';

import { delay } from '../../../../utils/delay';
import repoService from '../../../../api/repoService';
import issueService from '../../../../api/issueService';
import { addRepoInfo } from '../../../../redux/repoInfo/actionCreators';
import { addIssuesInfo, errorMessage, isIssuesLoading } from '../../../../redux/issuesInfo/actionCreators';


export const Search = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const com = value.indexOf('.com')
  const str = value.slice(com +5).split('/')
  const [repo, name] = str
  
  const onSearch = () => {
    if (!value) return
    dispatch(isIssuesLoading(true))

    delay(3000).then(async () => {
      try {
        const issueInfo = await issueService.getIssueInfo(repo, name)
        const repoInfo = await repoService.getRepoInfo(repo,name)
      
        dispatch(isIssuesLoading(false))
        dispatch(errorMessage(false))
        

        if (!issueInfo) return 
        if (!repoInfo) return 

        dispatch(addRepoInfo(repoInfo))
        dispatch(addIssuesInfo(issueInfo))
      } catch (error) {
       
        dispatch(errorMessage(true))
        dispatch(isIssuesLoading(false))
      }
    })
  }

  
  return (
    <div className="search">
      <input className="input" type="text" placeholder="Enter repo URL" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className="button" onClick={onSearch}>Load issues</button>
    </div>
  )
}