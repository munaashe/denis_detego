import React from 'react'
import SingleTask from './SingleTask'
import TaskInput from './TaskInput'
import { TaskProps } from '../utils/Types';

interface TasksComponentProps {
    tasks: TaskProps[];
    setTasks: React.SetStateAction<any>;
}

const Tasks: React.FC<TasksComponentProps> = ({
    tasks = [],
    setTasks,
}) => {

    return (
        <div className='rounded-2xl shadow-xl p-4'>
            <TaskInput
                tasks={tasks}
                setTasks={setTasks}
            />
            <div className='p-4 mt-8'>
                <div className='text-2xl font-bold text-center'>
                    Mission Tasks at Hand
                </div>
                {tasks?.length > 0 ? (
                    <>
                        {tasks.map((task, index) => (
                            <div className='mb-4' key={index}>
                                <SingleTask
                                    task={task}
                                    setTasks={setTasks}
                                    selectedTaskIndex={index}
                                />
                            </div>
                        ))}
                    </>
                ) : (
                    <div className='p-4 text-center pt-12'>
                        We want to go to Mars! Assign tasks right away!
                    </div>
                )}
            </div>
        </div>
    )
}

export default Tasks