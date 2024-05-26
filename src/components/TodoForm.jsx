import { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
  // This is a hook for managing the input value
  const [isInput, setIsInput] = useState(props.edit ? props.edit.value : '');

  // this is input ref
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // This is the handleChange function for changing the input values
  const handleChange = (e) => {
    setIsInput(e.target.value);
  };

  // This is the handleSubmit function for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: isInput,
    });

    setIsInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            className="todo-input edit"
            placeholder="Update Your Item"
            value={isInput}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            className="todo-input"
            placeholder="Add A Todo"
            value={isInput}
            name="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
