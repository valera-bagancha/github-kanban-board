import { useSelector } from 'react-redux'

import { Loader } from '../Loader'
import { IssuesList } from './components/IssuesList'
import { errorMessageSelector, issuesSelector, loaderSelector } from '../../redux/issuesInfo/selectors'


export const MainContent = () => {
  const issues = useSelector(issuesSelector)
  const isPending = useSelector(loaderSelector)
  const isErrorMessage = useSelector(errorMessageSelector)

  if (isPending) {
    return (
      <Loader />
    )
  }

  if (isErrorMessage) {
    return (
      <p className='error-message'>Link isn`t correct</p>
    )
  }

  if (!issues.length) {
    return (
      <div className='intro'>
        <span>
          Examples repository:
        </span>
        <a href="https://github.com/angular/angular" target='blank' className='repo-link'>https://github.com/angular/angular</a>
        <a href="https://github.com/facebook/react" target='blank' className='repo-link'>https://github.com/facebook/react</a>
      </div>
    )
  }
  
  return (
    <main className="main">
      <ul className="issues">
        <IssuesList />
      </ul>
    </main>
  )
}