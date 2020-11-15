import React from 'react';
import { render } from '@testing-library/react';
import App from '../Inbox';

it("Should render a Hello message", () => {
    render(<Inbox />)

    const elementText = document.querySelector("h2").textContent

    expect(elementText).toBe("Inbox")
})