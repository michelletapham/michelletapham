import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Footer() {
  return (
    <footer className="footer">
        <Container>
            <Row>
                <a href="https://github.com/michelletapham/michelletapham" target="_blank">made with ♡</a>
            </Row>
        </Container>
    </footer>
  );
}