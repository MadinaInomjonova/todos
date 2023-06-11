import { v4 as uuidv4 } from "uuid";

import "./add.css";

const Add = ({ todos, setTodos, input, setInput }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
    setInput("");
  };

  return (
    <form className="card add" onSubmit={onFormSubmit}>
      <div className="cb-container">
        <button onClick={onFormSubmit} id="add-btn">
          +
        </button>
      </div>
      <div className="txt-container">
        <input
          type="text"
          className="txt-input"
          placeholder="Create a new todo..."
          spellCheck="false"
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Add;
