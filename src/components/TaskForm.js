// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit, darkTheme }) => {
    const [task, setTask] = useState({ 
        name: '', 
        priority: 'Medium', 
        status: 'To Do' 
    });

    useEffect(() => {
        if (taskToEdit) {
            setTask(taskToEdit);
        } else {
            setTask({ name: '', priority: 'Medium', status: 'To Do' });
        }
    }, [taskToEdit]);

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (task.name.trim() === '') return;
        taskToEdit ? editTask(task) : addTask(task);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="border-0">
                <Modal.Title>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label className={darkTheme ? 'text-light' : ''}>Task Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={task.name}
                            onChange={handleChange}
                            placeholder="Enter task name"
                            className="rounded-3"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className={darkTheme ? 'text-light' : ''}>Priority</Form.Label>
                        <div className="d-flex justify-content-between">
                            <Button
                                variant={task.priority === 'High' ? 'danger' : 'outline-danger'}
                                onClick={() => setTask({ ...task, priority: 'High' })}
                            >
                                High
                            </Button>
                            <Button
                                variant={task.priority === 'Medium' ? 'warning' : 'outline-warning'}
                                onClick={() => setTask({ ...task, priority: 'Medium' })}
                            >
                                Medium
                            </Button>
                            <Button
                                variant={task.priority === 'Low' ? 'success' : 'outline-success'}
                                onClick={() => setTask({ ...task, priority: 'Low' })}
                            >
                                Low
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className={darkTheme ? 'text-light' : ''}>Status</Form.Label>
                        <Form.Select
                            name="status"
                            value={task.status}
                            onChange={handleChange}
                            className="rounded-3"
                        >
                            <option>To Do</option>
                            <option>In Progress</option>
                            <option>Done</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className="border-0">
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {taskToEdit ? 'Update Task' : 'Add Task'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TaskForm;