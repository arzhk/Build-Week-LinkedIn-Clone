import React from 'react';
import { Navbar, Nav, Image, NavDropdown, Row, Button, Container, FormControl, Col, Modal, Card, ListGroup } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBriefcase, faCertificate, faChartBar, faChevronCircleDown, faCommentDots, faCompress, faHome, faInfo, faMoneyBill, faPlay, faTh, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import "./style/NavFooter.css"


class NavBar extends React.Component {
    state = {
        show: false,
    }
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true });
    render() {
        console.log(this.props)
        const { pathname } = this.props.location
        return <div id="navbar">
            <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                <Container>
                    <Link to="/">
                        <Image src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" id="logo" rounded />
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                        </Nav>
                        <Nav className="ml-auto">
                            <Link to="/home">
                                <div className={pathname === '/home' ? 'nav-link active' : 'nav-link'}>
                                    <FontAwesomeIcon icon={faHome} size="lg" />
                                    <small>Home</small>
                                </div>
                            </Link>
                            <Link to="/network">
                                <div className={pathname === '/network' ? 'nav-link active' : 'nav-link'}>
                                    <FontAwesomeIcon icon={faUserFriends} size="lg" />
                                    <small>My Network</small></div>
                            </Link>
                            <Link to="/jobs">
                                <div className={pathname === '/jobs' ? 'nav-link active' : 'nav-link'}>
                                    <FontAwesomeIcon icon={faBriefcase} size="lg" />
                                    <small>Jobs</small></div>
                            </Link>
                            <Link to="/messeging">
                                <div className={pathname === '/messeging' ? 'nav-link active' : 'nav-link'}>
                                    <FontAwesomeIcon icon={faCommentDots} size="lg" />
                                    <small>Messaging</small></div>
                            </Link>
                            <Link to="/notifications">
                                <div className={pathname === '/notifications' ? 'nav-link active' : 'nav-link'}>
                                    <FontAwesomeIcon icon={faBell} size="lg" />
                                    <small>Notifications</small></div>
                            </Link>
                            <div id="dropdown" >
                                <Image src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" roundedCircle />
                                <NavDropdown title="Me" id="basic-nav-dropdown" className="p-0">
                                    <div class="dropdown-item">
                                        <div>
                                            <Row>
                                                <Image src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" roundedCircle />
                                                <div>
                                                    <h6>User Name</h6>
                                                    <p>Details about user</p>
                                                </div>
                                            </Row>
                                            <Link to="/myprofile">
                                                <Button variant="outline-primary" className="rounded-pill">
                                                    View Profile
                                                </Button>
                                            </Link>
                                        </div>
                                        <NavDropdown.Divider />
                                        <h6>Account</h6>
                                        <Link to="/settings">
                                            <div className={pathname === '/settings' ? 'nav-link active' : 'nav-link'}><p>Setting & Privacy</p></div>
                                        </Link>
                                        <Link to="/help">
                                            <div className={pathname === '/help' ? 'nav-link active' : 'nav-link'}><p>Help</p></div>
                                        </Link>
                                        <Link to="/language">
                                            <div className={pathname === '/language' ? 'nav-link active' : 'nav-link'}><p>Language</p></div>
                                        </Link>
                                        <NavDropdown.Divider />
                                        <h6>Manage</h6>
                                        <Link to="/posts">
                                            <div className={pathname === '/posts' ? 'nav-link active' : 'nav-link'}><p>Posts & Activity</p></div>
                                        </Link>
                                        <Link to="/jobPosting">
                                            <div className={pathname === '/jobPosting' ? 'nav-link active' : 'nav-link'}><p>Job Posting Account</p></div>
                                        </Link>
                                        <NavDropdown.Divider />
                                        <Link to="/signOut">
                                            <div className={pathname === '/signOut' ? 'nav-link active' : 'nav-link'}><p>Sign Out</p></div>
                                        </Link>
                                    </div>
                                </NavDropdown>
                            </div>
                            <Link>
                                <div className={pathname === '/signOut' ? 'nav-link active' : 'nav-link'} id="work-modal" onClick={this.handleShow}>
                                    <FontAwesomeIcon icon={faTh} size="lg" />
                                    <small>Work</small></div>
                            </Link>
                            <Link to="/learning">
                                <div className={pathname === '/learning' ? 'nav-link active p-2' : 'nav-link p-2'}>
                                    <div id="learning" ><FontAwesomeIcon icon={faPlay} size="sm" /></div>
                                    <small>Learning</small></div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={this.state.show} onHide={this.handleClose} id="navmodal" className="modal-dialog-scrollable">
                <Modal.Body>
                    <Card style={{ width: '20rem' }}>
                        <Card.Header>Visit More LinkedIn Products</Card.Header>
                        <Card.Body>
                            <Row sm={4}>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faChartBar} size="2x" /></Button>
                                </Col>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faCertificate} size="2x" /></Button>
                                </Col>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faChevronCircleDown} size="2x" /></Button>
                                </Col>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faCompress} size="2x" /></Button>
                                </Col>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faUserFriends} size="2x" /></Button>
                                </Col>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faInfo} size="2x" /></Button>
                                </Col>
                                <Col>
                                    <Button className="mt-2 btn-light"><FontAwesomeIcon icon={faMoneyBill} size="2x" /></Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem', marginTop: '20px' }}>
                        <Card.Header>LinkedIn Business Services</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Talent Solutions</ListGroup.Item>
                            <ListGroup.Item>Sales Solution</ListGroup.Item>
                            <ListGroup.Item>Post a job fro free</ListGroup.Item>
                            <ListGroup.Item>Marketing Solutions</ListGroup.Item>
                            <ListGroup.Item>Learning Solutions</ListGroup.Item>
                        </ListGroup>
                        <Card.Footer> Create a Company Page +</Card.Footer>
                    </Card>
                </Modal.Body>
            </Modal>
        </div>;
    }
}

export default withRouter(NavBar);