import './App.css'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Image from './components/Image'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import { TaskProps } from './utils/Types'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [currentUser, setCurrentUser] = useState<string>('');

  //sidebar data and user functions
  const onDeleteClick = () => {
    setTasks([]);
  };

  useEffect(() => {
    if (tasks.length > 0) {
      setCurrentUser(tasks[tasks.length - 1].author)
    } else {
      setCurrentUser('')
    }
  }, [tasks]);

  // tasks data and user functions

  return (
    <>
      <div className='min-h-[120vh]'>
        <Header />
        <Image />
        <div className='grid grid-cols-4 gap-4 w-full p-4'>
          <Sidebar
            tasks={tasks.length}
            onDeleteClick={onDeleteClick}
            userName={currentUser}
          />
          <div className='col-span-3'>
            <Tasks
              tasks={tasks}
              setTasks={setTasks}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
