import React from 'react'
import { TaskProps } from '../utils/Types';

interface DeleteTaskProps {
    title: string;
    index: any;
    closeModal: () => void;
    setTasks: React.SetStateAction<any>;
}

const DeleteTaskModal: React.FC<DeleteTaskProps> = ({
    title = '',
    index,
    closeModal,
    setTasks,

}) => {
    const onDelete = () => {
        setTasks((prevTasks: TaskProps[]) => {
            const updatedTasks = [...prevTasks];
            updatedTasks.splice(index, 1);
            return updatedTasks;
        });
        closeModal()
        alert(`Task ${title} has been successfully deleted`)
    };

    return (
        <div className='pt-12'>
            <div className='text-lg font-semibold text-primary'>
                Are you sure you want to delete the task titled <span className='text-secondary  italic'>{title} </span>
            </div>
            <div className='flex justify-center items-center gap-4 pt-8'>
                <div className='rounded-lg text-tertiary1 bg-red-800 hover:bg-red-600 cursor-pointer px-4 py-1'
                    onClick={onDelete}
                >
                    Yes, Delete
                </div>
                <div className='rounded-lg text-tertiary1 bg-primary hover:bg-secondary cursor-pointer px-4 py-1'
                    onClick={closeModal}
                >
                    Cancel
                </div>
            </div>
        </div>
    )
}

export default DeleteTaskModal