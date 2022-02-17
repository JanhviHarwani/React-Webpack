import * as React from 'react'
import Modal from '../components/Modal'
import { render, screen } from '@testing-library/react'
const jsdom = require('jsdom')
const { JSDOM } = jsdom
describe('Testing For Modal component', () => {
    test('Render component', () => {
        render(<Modal text="Pop-Up" />)

    })
    test('test if this text exists', () => {
        const dom = new JSDOM(screen.queryByText('Pop-Up'))
        expect(dom).toBeTruthy()
    })
})
