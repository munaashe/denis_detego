import { render, screen} from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom/vitest';
import App from "./App"



describe("Renders the main page", () => {
    test('renders header, image, sidebar, and tasks components', () => {
        render(<App />);

        //header
        const expectedText = 'We Going to Mars!';
        expect(screen.getByText(expectedText)).toBeInTheDocument();

        //sidebar
        const sidebarText = 'Current user:'
        expect(screen.getByText(sidebarText)).toBeInTheDocument();

        //tasks
        const tasksText = 'Add New Task'
        expect(screen.getByText(tasksText)).toBeInTheDocument();
    });
})



