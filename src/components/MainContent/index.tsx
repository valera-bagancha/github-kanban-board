export const MainContent = () => {
  return (
    <main className="main">
      <ul className="issues">
        <li className="issue-status-list">
          <h2 className="status-issues">ToDo</h2>
          <ul className="issue-list">
            <li className="issue">
              <h3 className="issue-title">Some issues title</h3>
              <span>#315 opened 3 days ago</span>
              <span>Admin | Comments: 3</span>
            </li>
            <li className="issue">
              <h3 className="issue-title">Some issues title</h3>
              <span>#315 opened 3 days ago</span>
              <span>Admin | Comments: 3</span>
            </li>
            <li className="issue">
              <h3 className="issue-title">Some issues title</h3>
              <span>#315 opened 3 days ago</span>
              <span>Admin | Comments: 3</span>
            </li>
          </ul>
        </li>
        <li className="issue-status-list">
          <h2 className="status-issues">In progress</h2>
          <ul className="issue-list">
            <li className="issue">
              <h3 className="issue-title">Some issues title</h3>
              <span>#315 opened 3 days ago</span>
              <span>Admin | Comments: 3</span>
            </li>
          </ul>
        </li>
        <li className="issue-status-list">
          <h2 className="status-issues">Done</h2>
          <ul className="issue-list">
            <li className="issue">
              <h3 className="issue-title">Some issues title</h3>
              <span>#315 opened 3 days ago</span>
              <span>Admin | Comments: 3</span>
            </li>
            <li className="issue">
              <h3 className="issue-title">Some issues title</h3>
              <span>#315 opened 3 days ago</span>
              <span>Admin | Comments: 3</span>
            </li>
          </ul>
        </li>
      </ul>
    </main>
  )
}