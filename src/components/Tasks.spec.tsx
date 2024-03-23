import { render, screen, fireEvent } from '@testing-library/react';
import { vi, expect, it } from 'vitest';
import Tasks from './Tasks';
import { TaskProps } from '../utils/Types';
import '@testing-library/jest-dom';

describe('Tasks component', () => {

    beforeEach(() => {
        window.alert = vi.fn();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('renders tasks correctly', () => {
        const tasks: TaskProps[] = [
            { title: 'Task 1', description: 'Task 1 Description', author: 'James Bond', personAssigned: 'Denis' },
            { title: 'Task 2', description: 'Task 2 Description', author: 'James Bond', personAssigned: 'Denis' },
        ];

        render(<Tasks tasks={tasks} setTasks={() => { }} />);

        expect(screen.getByText('Add New Task')).toBeInTheDocument();

        tasks.forEach((task) => {
            const taskElement = screen.getByText(task.title);
            expect(taskElement).toBeInTheDocument();
        });
    });

    it('displays message when no tasks are present', () => {
        render(<Tasks tasks={[]} setTasks={() => { }} />);

        expect(screen.getByText(/Assign tasks right away/i)).toBeInTheDocument();
    });

    it('calls setTasks when a task is added', () => {
        const setTasksMock = vi.fn();
        render(<Tasks tasks={[]} setTasks={setTasksMock} />);

        const taskInput = screen.getByText('Add New Task');
        const addButton = screen.getByText(/Add Task/i);

        taskInput.textContent = 'New Task';

        fireEvent.click(addButton);

        expect(setTasksMock).not.toHaveBeenCalled();

        // Check if error alert is displayed
        expect(window.alert).toHaveBeenCalledWith('All Fields Are Required');


        // Fill in the required fields
        const titleInput = screen.getByPlaceholderText('Input Task title');
        const descriptionInput = screen.getByPlaceholderText('Input Task description');
        const authorInput = screen.getByPlaceholderText('Input your name');
        const personAssignedInput = screen.getByPlaceholderText('Person assigned');

        fireEvent.change(titleInput, { target: { value: 'New Task' } });
        fireEvent.change(descriptionInput, { target: { value: 'New Task Description' } });
        fireEvent.change(authorInput, { target: { value: 'James Bond' } });
        fireEvent.change(personAssignedInput, { target: { value: 'Denis' } });

        fireEvent.click(addButton);

        expect(setTasksMock).toHaveBeenCalledTimes(1);
        expect(setTasksMock).toHaveBeenCalledWith([
            { title: 'New Task', description: 'New Task Description', author: 'James Bond', personAssigned: 'Denis' },
        ]);

        // Check if success alert is displayed
        expect(window.alert).toHaveBeenCalledWith('Task Added Successfully');

    });
});