// src/components/TaskList.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { Pencil, Trash } from 'react-bootstrap-icons';

const TaskList = ({ tasks, deleteTask, showEditForm, darkTheme }) => {
    const getStatusIcon = (status) => {
        let statusClass = '';
        switch (status) {
            case 'Done':
                statusClass = 'done';
                break;
            case 'In Progress':
                statusClass = 'in-progress';
                break;
            case 'To Do':
                statusClass = 'to-do';
                break;
            default:
                break;
        }
        return <div className={`status-circle ${statusClass}`} />;
    };

    const getPriorityClass = (priority) => {
        switch (priority) {
            case 'High':
                return 'text-danger';
            case 'Medium':
                return 'text-warning';
            case 'Low':
                return 'text-success';
            default:
                return '';
        }
    };

    const handleDeleteTask = (task) => {
        setTaskToDelete(task);
        setShowDeleteModal(true);
    };

    const confirmDeleteTask = () => {
        deleteTask(taskToDelete.id);
        setShowDeleteModal(false);
    };

    const cancelDeleteTask = () => {
        setShowDeleteModal(false);
    };
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Card key={task.id} className={`task-card mb-3 ${darkTheme ? 'dark' : ''}`}>
                    <Card.Body className="d-flex justify-content-between align-items-center py-3 px-4">
                        <div className="task-item task-name-container">
                            <div className="task-label mb-1">Task</div>
                            <div className="task-name">{task.name}</div>
                        </div>
                        <div className="task-item priority-container">
                            <div className="priority-label mb-1">Priority</div>
                            <div className={`priority-value ${getPriorityClass(task.priority)}`}>
                                {task.priority}
                            </div>
                        </div>
                        <div className="task-item status-container">
                            <div className={`status-badge ${task.status.toLowerCase().replace(' ', '-')}`}>
                                {task.status}
                            </div>
                        </div>
                        <div className="task-item status-icon-container">
                            {getStatusIcon(task.status)}
                        </div>
                        <div className="task-item actions-container">
                            <button 
                                className="btn btn-icon" 
                                onClick={() => showEditForm(task)}
                            >
                                <Pencil size={18} />
                            </button>
                            <button 
                                className="btn btn-icon" 
                                onClick={() => deleteTask(task.id)}
                            >
                                <Trash size={18} />
                            </button>
                        </div>
                    </Card.Body>
                </Card>
            ))}
            
        </div>
    );
};

export default TaskList;