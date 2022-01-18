import { useEffect } from "react";

const Form = ({
  input,
  toDoList,
  setInput,
  setToDoList,
  editTodo,
  setEditTodo
}) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = toDoList.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    setToDoList(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else setInput("");
  }, [setInput, editTodo]);
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!editTodo) {
      setToDoList([
        ...toDoList,
        { id: Math.random(), title: input, completed: false }
      ]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form className="form-container" onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter your Todo..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="task-input"
      />
      <button className="add-btn" type="submit">
        ADD
      </button>
    </form>
  );
};
export default Form;
