import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import TaskCard from "./TaskCard";
import "./TaskCard.css";

export default function TaskBoard() {
  const tasks = [
    // To Do
    {
      id: 1,
      title: "Learn React",
      description: "Practice React components",
      priority: "High",
      taskDate: "Nov 07, 2026",
      taskStatus: "To Do",
    },
    {
      id: 2,
      title: "Learn TypeScript",
      description: "Understand TypeScript basics",
      priority: "Medium",
      taskDate: "Nov 08, 2026",
      taskStatus: "To Do",
    },

    // In Progress
    {
      id: 3,
      title: "Practice JavaScript",
      description: "Solve JavaScript problems",
      priority: "High",
      taskDate: "Nov 09, 2026",
      taskStatus: "In Progress",
    },
    {
      id: 4,
      title: "Build Task Manager",
      description: "Create dashboard UI with React",
      priority: "Medium",
      taskDate: "Nov 10, 2026",
      taskStatus: "In Progress",
    },

    // Done
    {
      id: 5,
      title: "Complete HTML & CSS",
      description: "Finish HTML and CSS fundamentals",
      priority: "Low",
      taskDate: "Nov 05, 2026",
      taskStatus: "Done",
    },
    {
      id: 6,
      title: "Learn Git & GitHub",
      description: "Practice Git commands and GitHub",
      priority: "High",
      taskDate: "Nov 06, 2026",
      taskStatus: "Done",
    },
  ];

  return (
    <div>
      <div className="toDoList grid grid-cols-3 gap-3 w-11/12 m-auto pt-10">
        {/* card 1 */}
        <div className="taskColum">
          <div className="cardHead bg-white flex justify-between p-5">
            <h2>To DO List</h2>
            <CiCirclePlus />
          </div>

          <div className="taskArea">
            {tasks
              .filter((task) => task.taskStatus === "To Do")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  taskDate={task.taskDate}
                  taskStatus={task.taskStatus}
                />
              ))}
          </div>
        </div>

        {/* card 2 */}
        <div className="taskColum">
          <div className="cardHead bg-white flex justify-between p-5">
            <h2>In Progress</h2>
            <CiCirclePlus />
          </div>

          <div className="taskArea">
            {tasks
              .filter((task) => task.taskStatus === "In Progress")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  taskDate={task.taskDate}
                  taskStatus={task.taskStatus}
                />
              ))}
          </div>
        </div>

        {/* card 3 */}
        <div className="taskColum">
          <div className="cardHead bg-white flex justify-between p-5">
            <h2>Done</h2>
            <CiCirclePlus />
          </div>

          <div className="taskArea">
            {tasks
              .filter((task) => task.taskStatus === "Done")
              .map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  taskDate={task.taskDate}
                  taskStatus={task.taskStatus}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
