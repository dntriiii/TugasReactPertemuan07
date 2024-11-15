import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: '', priority: '', status: '' },
    { id: 2, name: '', priority: '', status: '' },
    { id: 3, name: '', priority: '', status: '' },
    { id: 4, name: '', priority: '', status: '' },
    { id: 5, name: '', priority: '', status: '' },
    { id: 6, name: '', priority: '', status: '' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  return (
    <div className="app-background min-vh-100 py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="fw-bold mb-0">Task List</h1>
          <button className="btn add-task-btn" onClick={handleShowForm}>
            + Add Task
          </button>
        </div>
        <TaskList 
          tasks={tasks} 
          deleteTask={deleteTask} 
          showEditForm={showEditForm} 
        />
        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
    </Container>
    </div>
  );
}

export default App;