import { FC } from 'react'

import { IIssues } from '../../../types/issues';

interface IProps {
  title: string;
  issues: IIssues[]
}

export const StatusIssue: FC<IProps> = ({ title, issues }) => {
  
  return (
    <li className="issue-status-list" key={title}>
      <h2 className="status-issues">{title}</h2>
      <ul className="issue-list">
        {issues.map((data: any) => (
          <li className="issue" key={data.number}>
            <h3 className="issue-title">{data.title}</h3>
            <span>#{data.number} opened {(data.updated_at).slice(0, 10)}</span>
            <span>{data.user.login} | Comments: {data.comments}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}