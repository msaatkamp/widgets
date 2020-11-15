import React from 'react';
import { render } from '@testing-library/react';
import App from '../home';

it("Should render a Hello message", () => {
    render(<App></App>)

    const elementText = document.querySelector("h2").textContent

    expect(elementText).toBe("Hello")
})