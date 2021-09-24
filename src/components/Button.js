function Button(props) {
  return (
    <button className="button" onClick={props.onAddition}>
      Add Task
    </button>
  );
}

export default Button;
