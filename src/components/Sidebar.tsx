import React from 'react'

interface SidebarProps {
    userName: string;
    tasks: number;
    onDeleteClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
    userName = '',
    tasks = 0,
    onDeleteClick = () => { },
}) => {
    return (
        <div className='flex flex-col items-center justify-center rounded-2xl shadow-xl'>
            <div className='text-lg font-semibold pt-4'>Current user:</div>
            {userName === '' ? (<div className='text-md pt-2 italic text-secondary'>enter task to begin</div>
            ) : (
                <div className='text-md pt-2 text-secondary'>{userName}</div>
            )}
            <div className='text-lg font-semibold pt-8'>Total tasks</div>
            <div className='text-md pt-2'>{tasks}</div>
            <div className='cursor-pointer bg-red-700 hover:bg-red-600 text-tertiary1 rounded-xl px-4 py-1 mt-12 mb-4'
                onClick={onDeleteClick}
            >
                Delete All Tasks
            </div>
        </div>
    )
}

export default Sidebar