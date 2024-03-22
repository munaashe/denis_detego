import React, { useState } from 'react'
import { TaskProps } from '../utils/Types';
import Modal from './Modal';
import UpdateTaskModal from './UpdateTaskModal';
import DeleteTaskModal from './DeleteTaskModal';
interface SingeTaskProps {
    task: TaskProps;
    setTasks: React.SetStateAction<any>;
    selectedTaskIndex: number
}

const SingleTask: React.FC<SingeTaskProps> = ({
    task,
    setTasks,
    selectedTaskIndex,
}) => {
    const {
        title = '',
        description = '',
        author = '',
        personAssigned = '',
    } = task || [];
    const [updateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
    const [taskIndex, setTaskIndex] = useState(null);

    //update task click
    const onUpdateClick = (task: TaskProps, index: any) => {
        setTaskIndex(index);
        setUpdateModalOpen(true)
    };


    //delete task click
    const onDeleteClick = (task: TaskProps, index: any) => {
        setTaskIndex(index);
        setDeleteModalOpen(true)
    };
    return (
        <>
            <Modal
                title='Update Task'
                open={updateModalOpen}
                setOpen={setUpdateModalOpen}
                content={
                    <UpdateTaskModal
                        task={task}
                        setTasks={setTasks}
                        index={taskIndex}
                        closeModal={() => setUpdateModalOpen(false)}
                    />}
                size='w-[580px] h-[440px]'
            />
            <Modal
                title='Delete Task'
                open={deleteModalOpen}
                setOpen={setDeleteModalOpen}
                content={
                    <DeleteTaskModal
                        title={task.title}
                        index={taskIndex}
                        setTasks={setTasks}
                        closeModal={() => setDeleteModalOpen(false)}
                    />}
                size='w-[540px] h-[280px]'
            />
            <div className='p-4 shadow-lg rounded-lg'>
                <div className='font-semibold text-lg pb-2s'>
                    {title}
                </div>
                <div className='text-md'>
                    {description}
                </div>
                <div className='w-full flex items-center justify-center italic text-sm pt-4'>
                    <div className='w-full'>
                        published by: <span>{author}</span>
                    </div>
                    <div className='w-full text-end'>
                        assigned to: <span> {personAssigned}</span>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-4 pt-4'>
                    <div className='rounded-lg text-tertiary1 bg-primary hover:bg-secondary cursor-pointer px-4 py-1'
                        onClick={() => onUpdateClick(task, selectedTaskIndex)}
                    >
                        Update Task
                    </div>
                    <div className='rounded-lg text-tertiary1 bg-red-700 hover:bg-red-600 cursor-pointer px-4 py-1'
                        onClick={() => onDeleteClick(task, selectedTaskIndex)}
                    >
                        Delete Task
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleTask