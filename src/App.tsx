import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Image from './components/Image'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import { TaskProps } from './utils/Types'

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <>
      <div className='min-h-[120vh]'>
        <Header />
        <Image />
        <div className='grid grid-cols-4 gap-4 w-full p-4'>
          <Sidebar />
          <div className='col-span-3'>
            <Tasks />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
