import { useState } from "react";

const Filter = ({ todos, setTodos, updateFilterHandler }) => {
  const [name, setName] = useState("all");

  return (
    <div className="card stat">
      <p className="corner">
        <span id="items-left">{todos.length}</span> items left
      </p>
      <div className="filter">
        {btnsArr.map((btn) => (
          <button
            key={btn.name}
            id={btn.name}
            onClick={() => {
              updateFilterHandler(btn.name);
              setName(btn.name);
            }}
            className={`${btn.name === name && "on"}`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      <div className="corner">
        <button
          onClick={() => setTodos(todos.filter((c) => !c.completed))}
          id="clear-completed"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
};

const btnsArr = [
  { name: "all", label: "All" },
  { name: "active", label: "Active" },
  { name: "completed", label: "Completed" },
];

export default Filter;
