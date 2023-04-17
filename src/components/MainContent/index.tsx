import { IssuesList } from './components/IssuesList'

 

export const MainContent = () => {
  return (
    <main className="main">
      <ul className="issues">
        <IssuesList />
      </ul>
    </main>
  )
}