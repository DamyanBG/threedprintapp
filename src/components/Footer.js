import { Row, Container, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        Copyright &copy; ThreeDPrintShop
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;