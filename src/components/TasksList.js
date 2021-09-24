import { FaTimes } from "react-icons/fa";

function TasksList(props) {
  const items = props.tasks.map((item) => {
    return (
      <div className="item" key={item.id}>
        <li>{item.text}</li>
        <button onClick={() => props.onDelete(item.id)}>
          <FaTimes style={{ color: "white" }} />
        </button>
      </div>
    );
  });
  return (
    <div className="tasksList">
      <h3>Your tasks are:</h3>
      <ol>{items}</ol>
    </div>
  );
}

export default TasksList;
