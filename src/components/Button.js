function Button(props) {
  return (
    <button className="button" onClick={props.onAdd}>
      Add Task
    </button>
  );
}

export default Button;
