import * as React from 'react'
import Modal from './components/Modal'
import Container from '@material-ui/core/Container'
import './style.css'


export const App:React.FC = () => (
    <Container maxWidth="sm">
        <h1>Hello World</h1>
        <Modal text='Pop-up from app'/>
    </Container>
)
