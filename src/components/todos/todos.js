import { Filter } from "../";

import iconCross from "../../assets/images/icon-cross.svg";
import "./todos.css";

const Todos = ({ todos, setTodos, updateFilterHandler }) => {
  const handleDelete = ({ id }) => {
    return setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = ({ id }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <ul className="todos">
        {todos?.map((todo) => (
          <li key={todo.id} className="card">
            <div className="cb-container">
              <input
                type="checkbox"
                onClick={() => handleComplete(todo)}
                className={`cb-input ${todo.completed && "active"}`}
              />
              <span className="check"></span>
            </div>
            <p
              style={
                todo.completed
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
              className="item"
            >
              {todo.title}
            </p>
            <button className="clear" onClick={() => handleDelete(todo)}>
              <img src={iconCross} alt="Clear it" />
            </button>
          </li>
        ))}
      </ul>
      <Filter
        todos={todos}
        setTodos={setTodos}
        updateFilterHandler={updateFilterHandler}
      />
    </>
  );
};

export default Todos;
