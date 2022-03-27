import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from './card.comp'
import '@testing-library/jest-dom'

describe('Card Tests', () => {
    test("Checks Card text content", () => {
        render(<Card>Im a card!</Card>)
        expect(screen.getByText('Click!')).toBeInTheDocument()
    })

    test("Checks Card class name", () => {
        const { container } = render(<Card className='my-class'></Card>)
        expect(container.firstChild).toHaveClass('my-class')
    })

    test("Checks Card click event", () => {
        const mockClick = jest.fn();
        const { getByText } = render((<Card buttonText={'Click Me!!'} onClick={mockClick}>Im a card!</Card>));
        fireEvent.click(getByText(/Click Me!!/i));
        expect(mockClick).toHaveBeenCalled();
    })
})
