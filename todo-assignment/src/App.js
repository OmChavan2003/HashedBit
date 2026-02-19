import React, { useState } from 'react';
import './App.css'; // We will keep the default styles for now

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 1. Function to Add Task
  const handleAddTask = () => {
    // Bonus: Prevent adding empty tasks (Good UX)
    if (!inputValue.trim()) return;

    const newTask = {
      id: Date.now(), // Unique ID based on time
      text: inputValue
    };

    setTasks([...tasks, newTask]);
    setInputValue(''); // 2. Clear input field after adding
  };

  // 3. Function to Delete Task
  const handleDelete = (idToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedTasks);
  };

  // 4. Sort tasks in Ascending Order (A-Z)
  // We create a copy using [...tasks] to avoid mutating the original state directly
  const sortedTasks = [...tasks].sort((a, b) => 
    a.text.toLowerCase().localeCompare(b.text.toLowerCase())
  );

  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>React - To Do App</h1>
      
      {/* Input Section */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ padding: '10px', width: '250px', marginRight: '10px' }}
        />
        <button 
          onClick={handleAddTask}
          style={{ padding: '10px 20px', cursor: 'pointer' }}
        >
          Add
        </button>
      </div>

      {/* Task List Section */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {sortedTasks.map((task) => (
          <li 
            key={task.id} 
            style={{ 
              background: '#f4f4f4', 
              margin: '5px 0', 
              padding: '10px', 
              display: 'flex', 
              justifyContent: 'space-between',
              maxWidth: '350px',
              borderRadius: '5px'
            }}
          >
            <span>{task.text}</span>
            <button 
              onClick={() => handleDelete(task.id)}
              style={{ color: 'red', cursor: 'pointer', marginLeft: '10px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;