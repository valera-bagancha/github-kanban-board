import { FC } from 'react'
import { IIssues } from '../../../types/issues';

// import { IIssues } from '../../../types/issues';
// import { useDispatch, useSelector } from 'react-redux';
// import { addIssuesInfo, changeStatus, index, iditi } from '../../../redux/issuesInfo/actionCreators';
// import { idSelector, inProgressIssueSelector, indexSelector, issuesSelector } from '../../../redux/issuesInfo/selectors';

interface IProps {
  title: string;
  issues: any
  dropHandler: any;
  dragStartHandler: any;
  dragOverHandler: any;
  dragLeaveHandler: any;
  dragEndHandler: any;
  dropCardHandler: any
}

export const StatusIssue: FC<IProps> = ({
  title,
  issues,
  dragStartHandler,
  dropHandler,
  dragOverHandler,
  dragLeaveHandler,
  dragEndHandler,
  dropCardHandler
}) => {

  return (
    <li className="issue-status-list" key={title}>
      <h2 className="status-issues">{title}</h2>
      <ul className="issue-list"
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropCardHandler(e, title, !issues.length)}
      >
        {issues.map((data: any) => (
          <li className="issue" key={data.number} draggable={true}
            onDragOver={(e) => dragOverHandler(e)}
            onDragLeave={e => dragLeaveHandler(e)}
            onDragStart={(e) => dragStartHandler(data.id, data)}
            onDragEnd={(e) => dragEndHandler(e, data.condition, data.id)}
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