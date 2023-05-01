import { FC, SyntheticEvent } from 'react'
import { IIssues } from '../../../types/issues';

interface IProps {
  title: string;
  issues: IIssues[]
  dropHandler: (
    e: SyntheticEvent<HTMLLIElement>, 
    condition: string, 
    dataIssue: IIssues, 
    isEmpty: boolean
    ) => void;
  dragStartHandler: (issue: IIssues) => void;
  dragOverHandler: any;
  dragLeaveHandler: (e: SyntheticEvent<HTMLLIElement>) => void;
  dropCardHandler: (
    e: React.DragEvent<HTMLUListElement>,
    condition: string, 
    isEmpty: boolean
    ) => void
}

export const StatusIssue: FC<IProps> = ({
  title,
  issues,
  dragStartHandler,
  dropHandler,
  dragOverHandler,
  dragLeaveHandler,
  dropCardHandler
}) => {

  return (
    <li className="issue-status-list" key={title}>
      <h2 className="status-issues">{title}</h2>
      <ul className="issue-list"
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCardHandler(e, title, !issues.length)}
      >
        {issues.map((data: IIssues) => (
          <li className="issue" key={data.number} draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(data)}
            onDrop={(e) => dropHandler(e, data.condition, data, !issues.length)}
          >
            <h3 className="issue-title">{data.title}</h3>
            <span>#{data.number} opened {(data.updated_at).slice(0, 10)}</span>
            <span>{data.user.login} | Comments: {data.comments}</span>
          </li>
        ))}
      </ul>
    </li>
  )
}