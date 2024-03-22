import React, { useState } from 'react'
import { TaskProps } from '../utils/Types';

export const initialState = {
    title: '',
    description: '',
    author: '',
    personAssigned: '',
};

interface TaskInputProps {
    tasks: TaskProps[];
    setTasks: React.SetStateAction<any>;
}

const TaskInput: React.FC<TaskInputProps> = ({
    tasks,
    setTasks
}) => {
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<TaskProps>(initialState);

    //handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setIsError(false);
    };

    //add task button click
    const onAddClick = () => {
        if (
            data.author === '' ||
            data.description === '' ||
            data.personAssigned === '' ||
            data.title === ''
        ) {
            setIsError(true);
            alert('All Fields Are Required');
        } else {
            const mutatedTasks = [...tasks, data];
            setTasks(mutatedTasks);
            setData(initialState);
            alert('Task Added Successfully')
        }
    }

    return (
        <div className='p-4 shadow-lg mt-8 rounded-lg'>
            <div className='text-lg font-semibold text-center'>
                Add New Task
            </div>
            <div className='flex flex-col'>
                <label htmlFor='title' className='text-md font-medium text-start pt-2 pb-1'>
                    Task Title
                </label>
                <input
                    className='py-1 px-2 rounded-lg border border-tertiary2'
                    title='Task Title'
                    placeholder='Input Task title'
                    name='title'
                    value={data.title}
                    onChange={handleChange}
                />
                <label htmlFor='title' className='text-md font-medium text-start pt-4 pb-1'>
                    Task Description:
                </label>
                <textarea
                    className='py-1 px-2 rounded-lg border border-tertiary2'
                    title='Task Description'
                    placeholder='Input Task description'
                    name='description'
                    value={data.description}
                    onChange={handleChange}
                />
                <div className='w-full flex gap-4 pt-2'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='title' className='text-md font-medium text-start pt-2 pb-1'>
                            Task Author
                        </label>
                        <input
                            className='py-1 px-2 rounded-lg border border-tertiary2'
                            title='Task Title'
                            placeholder='Input your name'
                            name='author'
                            value={data.author}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='title' className='text-md font-medium text-start pt-2 pb-1'>
                            Person Assigned
                        </label>
                        <input
                            className='py-1 px-2 rounded-lg border border-tertiary2'
                            title='Task Title'
                            placeholder='Person assigned'
                            name='personAssigned'
                            value={data.personAssigned}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center pt-4'>
                <div className='rounded-xl px-4 py-1 bg-primary text-tertiary1 hover:bg-gray-700 cursor-pointer'
                    onClick={onAddClick}
                >
                    Add Task
                </div>
            </div>
        </div>
    )
}

export default TaskInput