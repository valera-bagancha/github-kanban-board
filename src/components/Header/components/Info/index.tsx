import { useSelector } from 'react-redux'
import { repoSelector } from '../../../../redux/repoInfo/selectors'
import { errorMessageSelector, issuesSelector } from '../../../../redux/issuesInfo/selectors'
import { insert } from '../../../../utils/insert'

export const Info = () => {
  const repo = useSelector(repoSelector)
  const errorMessage = useSelector(errorMessageSelector)

  const stars = repo?.stargazers_count
  const fullName = repo?.full_name
  
  const str = fullName?.split('/') || []
  const nav = str.map((repo: string) => repo[0].toUpperCase() + repo.slice(1))
 
  return (
    <div className="info-header">
      {!errorMessage && !!nav.length && <span className="info-repo-header">{nav[0]} &gt; {nav[1]}</span>}
      {!errorMessage && stars && <span>&#9733; {stars} stars</span>}
    </div>
  )
}