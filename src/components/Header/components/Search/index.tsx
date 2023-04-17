import { useState } from 'react'
import { delay } from '../../../../utils/delay';
import { useDispatch } from 'react-redux';
import { addIssuesInfo } from '../../../../redux/issuesInfo/actionCreators';
import issueService from '../../../../api/issueService';
import repoService from '../../../../api/repoService';
import { addRepoInfo } from '../../../../redux/repoInfo/actionCreators';




export const Search = () => {
  const [value, setValue] = useState('')

  const [isRepoInfoLoading, setIsRepoInfoLoading] = useState(false)

  const dispatch = useDispatch()

  const com = value.indexOf('.com')
  const str = value.slice(com +5).split('/')
  const [repo, name] = str
  
  const clickHandler = () => {
    if (!repo && !name) return
    setIsRepoInfoLoading(true)
 
    delay(2000).then(async () => {
      try {
        const issueInfo = await issueService.getIssueInfo(repo, name)
        const repoInfo = await repoService.getRepoInfo(repo,name)
  
        dispatch(addRepoInfo(repoInfo))
        dispatch(addIssuesInfo(issueInfo))
        setIsRepoInfoLoading(false)
      } catch (error) {
        setIsRepoInfoLoading(false)
      }
    })
  }

  
  return (
    <div className="search">
      <input className="input" type="text" placeholder="Enter repo URL" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button className="button" onClick={clickHandler}>Load issues</button>
    </div>
  )
}