import { FC } from 'react'

interface IProps {
  title: string
}

export const StatusIssue: FC<IProps> = ({title}) => {
  return (
    <li className="issue-status-list" key={title}>
      <h2 className="status-issues">{title}</h2>
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
  )
}