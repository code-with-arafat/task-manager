
import react from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';

export default function TaskCard({priority,title,description,taskDate,taskStatus}) {
  return (
    <div className="task-card">

      <div className="task-card-top">
        <span className="priority high">{priority}</span>
        <BsThreeDots />
      </div>

      <h3 className="title">{title}</h3>

      <p className="discription">
        {description}
      </p>

      <div className="task-card-bottom">
        <span className="task-date">
          <FaRegCalendarAlt />
          {taskDate}
        </span>

        <span className="task-status">{taskStatus}</span>
      </div>

    </div>
  );
}
