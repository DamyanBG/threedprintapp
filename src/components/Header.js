import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>
                            ThreeDPrintWorkShop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="/products">Products</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                            <NavDropdown title="Login" id='username'>
                                <LinkContainer to='/login'>
                                    <NavDropdown.Item>User Login</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/moderator/login'>
                                    <NavDropdown.Item>Moderator Login</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to='/admin/login'>
                                    <NavDropdown.Item>Administrator Login</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <Nav.Link href="/login"><i className="fa-solid fa-right-to-bracket"></i>Login</Nav.Link>
                            
                            <Nav.Link href="/register"><i className="fa-solid fa-user-plus"></i>Register</Nav.Link>
                                
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;