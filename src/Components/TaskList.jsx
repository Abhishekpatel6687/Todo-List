import React, { useContext } from "react";
import { AllData } from "../AddTask";

const TaskList = () => {
  const { data, edit, deleteList, AllDelete, handleToggleTodo } =
    useContext(AllData);

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <div className="list-item"
            >
              <p>{item.name}</p>
              <p>{item.textarea}</p>
              <p>{item.option}</p>
              <div className="btn-list">
                <input
                  type="checkbox"
                  onClick={() => handleToggleTodo(index)} className="checked"
                />
                <button onClick={() => edit(index)} className="btn">
                  Edit
                </button>
                <button onClick={() => deleteList(index)} className="btn-del">
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {data.length >= 1 ? (
        <button onClick={AllDelete} className="btn-btn">
          All Delete
        </button>
      ) : null}
    </>
  );
};

export default TaskList;
