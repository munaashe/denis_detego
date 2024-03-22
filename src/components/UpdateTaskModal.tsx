import React, { useState } from 'react'
import { TaskProps } from '../utils/Types'

interface UpdateTaskProps {
    task: TaskProps;
    setTasks: React.SetStateAction<any>;
    index: any;
    closeModal: () => void;
}

const UpdateTaskModal: React.FC<UpdateTaskProps> = ({
    task,
    setTasks,
    index,
    closeModal,
}) => {
    const {
        author = '',
        description = '',
        personAssigned = '',
        title = '',
    } = task || [];

    const initialState = {
        title: title,
        description: description,
        author: author,
        personAssigned: personAssigned,
    };
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

    //update task 
    const updateTask = (index: number, updatedTask: TaskProps) => {
        if (
            data.author === '' ||
            data.description === '' ||
            data.personAssigned === '' ||
            data.title === ''
        ) {
            setIsError(true);
            alert('All Fields Are Required');
        } else {

            setTasks((prevTasks: TaskProps[]) => {
                const updatedTasks = [...prevTasks];
                updatedTasks[index] = { ...updatedTasks[index], ...updatedTask };
                return updatedTasks;
            });
            setData(initialState);
            closeModal();
            alert('Task Updated Successfully')
        };
    }

    return (
        <div className='p-4'>
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
            <div className='flex items-center justify-center pt-4 gap-4'>
                <div className='rounded-xl px-4 py-1 bg-primary text-tertiary1 hover:bg-gray-700 cursor-pointer'
                    onClick={() => updateTask(index, data)}
                >
                    Update Task
                </div>
                <div className='rounded-xl px-4 py-1 bg-red-700 text-tertiary1 hover:bg-red-600 cursor-pointer'
                    onClick={closeModal}
                >
                    Cancel
                </div>
            </div>
        </div>
    )
}

export default UpdateTaskModal
