import { useState } from "react";

import { Header, Add, Todos } from "../";

import "./app.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const handleFilter = () => {
    switch (filter) {
      case "active":
        return todos.filter((c) => !c.completed);
      case "completed":
        return todos.filter((c) => c.completed);
      default:
        return todos;
    }
  };

  const updateFilterHandler = (filter) => setFilter(filter);

  const visibleData = handleFilter();

  return (
    <div>
      <Header />
      <main>
        <Add
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
        />
        <Todos
          todos={visibleData}
          setTodos={setTodos}
          updateFilterHandler={updateFilterHandler}
        />
      </main>
    </div>
  );
};

export default App;
