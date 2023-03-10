import React from "react";
import { useState } from "react";

interface Todo {
  task: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const initialState: Todo[] = [
    {
      task: "Learn vue.js",
      isCompleted: false,
    },
    {
      task: "Learn React Hook",
      isCompleted: false,
    },
    {
      task: "Learn Gatsby.js",
      isCompleted: false,
    },
  ];

  const handleNewTask = (event) => {
    console.log(event.target.value);
  };

  const [todos, setTodos] = useState<Todo[]>(initialState);
  const [task, setTask] = useState<string>("");

  return (
    <>
      <h1>ToDo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.task}</li>
        ))}
      </ul>
      Add Task :{" "}
      <input value={task} placeholder="Add New Task" onChange={handleNewTask} />
    </>
  );
};

export default TodoList;
