'use client';

import { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="タスクを入力..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="w-full mt-2 p-2 bg-blue-500 text-white rounded" onClick={handleAddTask}>
          タスクを追加
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="mb-2 p-2 border rounded flex justify-between">
            <span>{task}</span>
            <button className="text-red-500" onClick={() => handleDeleteTask(index)}>
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
