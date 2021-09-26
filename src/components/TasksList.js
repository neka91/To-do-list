import { FaTimes } from "react-icons/fa";

function TasksList(props) {
  return (
    <div className="tasksList">
      <h3>Your tasks are:</h3>
      <ol>
        {props.tasks.map((item) => {
          return (
            <div className="tasksList__item" key={item.id}>
              <li className="tasksList__item_li">{item.text}</li>
              <button
                className="tasksList__item_button"
                onClick={() => props.onDelete(item.id)}
              >
                <FaTimes style={{ color: "white" }} />
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default TasksList;
