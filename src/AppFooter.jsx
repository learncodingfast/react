import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const AppFooter = () => {
    return (
        <div  className="d-flex flex-column min-vh-50">
            <footer className='bg-dark text-white py-3 mt-auto t-center'>
                <Container>
                    <Row>
                        <Col className="text-center d-block"><p>&copy; 2025 To-Do List App. All rights reserved.</p></Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}
