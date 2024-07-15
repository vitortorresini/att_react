import React, { useState, useCallback } from 'react';
import '../App.css';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Função para adicionar uma nova tarefa à lista usando useCallback
  const addTask = useCallback(() => {
    if (newTask.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask('');
    }
  }, [newTask]);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Nova tarefa"/>
      <button className='botao' onClick={addTask}>Adicionar Tarefa</button>

      <ul className='lista-tarefas'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
