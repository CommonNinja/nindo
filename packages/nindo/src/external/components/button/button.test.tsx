import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './button.comp'
import '@testing-library/jest-dom'

describe('Button Tests', () => {
    test("Checks button text content", () => {
        render(<Button>Click!</Button>)
        expect(screen.getByText('Click!')).toBeInTheDocument()
    })

    test("Checks button class name", () => {
        const { container } = render(<Button className='my-class'>Click!</Button>)
        expect(container.firstChild).toHaveClass('my-class')
    })

    test("Checks button click event", () => {
        const mockClick = jest.fn();
        const { getByText } = render((<Button onClick={mockClick}>Click Me!</Button>));
        fireEvent.click(getByText(/Click Me!/i));
        expect(mockClick).toHaveBeenCalled();
    })
})
