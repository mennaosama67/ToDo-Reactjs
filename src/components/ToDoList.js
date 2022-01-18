const ToDoList = ({ toDoList, setToDoList, setEditTodo }) => {
  const completeHandler = (todo) => {
    setToDoList(
      toDoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        } else return item;
      })
    );
  };

  const editHandler = ({ id }) => {
    const findTodo = toDoList.find((item) => item.id === id);
    setEditTodo(findTodo);
  };
  const deleteHandler = ({ id }) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };
  return (
    <>
      {toDoList.map((todo) => {
        return (
          <li className="todo-item" key={todo.id}>
            <input
              type="text"
              value={todo.title}
              onChange={(e) => e.preventDefault()}
              className={`item ${todo.completed === true ? "done" : ""}`}
            />
            <div className="icon">
              <i
                className="fas fa-check-circle complete "
                onClick={() => completeHandler(todo)}
              ></i>
              <i
                className="fas fa-edit edit"
                onClick={() => editHandler(todo)}
              ></i>
              <i
                className="fas fa-trash-alt delete"
                onClick={() => deleteHandler(todo)}
              ></i>
            </div>
          </li>
        );
      })}
    </>
  );
};
export default ToDoList;
