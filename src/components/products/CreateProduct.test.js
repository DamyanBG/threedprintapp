import { render, screen } from '@testing-library/react'
import CreateProduct from './CreateProduct'

test('Initial values check', () => {
    render(<CreateProduct />)
    const productTitle = screen.getByTestId("productTitle")
    expect(productTitle.textContent).toEqual("")
    const description = screen.getByTestId("description")
    expect(description.textContent).toEqual("")
    const amount = screen.getByTestId("amount")
    expect(amount.textContent).toEqual("")
})
