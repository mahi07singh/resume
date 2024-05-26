import { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

const TodoList = () => {
  // This is state for todos and setTodos manage
  const [todos, setTodos] = useState([]);

  // This is the addTodo function
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    // Add the new todo to the list
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  
    // this is update todo 
    const updatTodo = (todoId, newValue) => {
      if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
      }

      setTodos(prev => prev.map(item=>(item.id === todoId ? newValue : item)));
    }

  // this function for remove todo
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  // this fuction for complete todo
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatTodo={updatTodo}/>
    </div>
  );
};

export default TodoList;
