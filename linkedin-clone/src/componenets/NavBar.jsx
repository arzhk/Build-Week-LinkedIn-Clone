import React from 'react';
import { Navbar, Nav, Image, NavDropdown, Row, Button, Container, FormControl, Col } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBriefcase, faCommentDots, faHome, faPlay, faTh, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import "./style/NavFooter.css"


class NavBar extends React.Component {
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
                                                <h4>User Name</h4>
                                                <p>Details about user</p>
                                            </Row>
                                            <Link to="/myprofile">
                                                <Button variant="outline-primary">
                                                    View Profile
                                                </Button>
                                            </Link>
                                        </div>
                                        <NavDropdown.Divider />
                                        <h4>Account</h4>
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
                                        <h4>Manage</h4>
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
                                <div className={pathname === '/signOut' ? 'nav-link active' : 'nav-link'} id="work-modal">
                                    <FontAwesomeIcon icon={faTh} size="lg" />
                                    <small>Work</small></div>
                            </Link>
                            <Link to="/learning">
                                <div className={pathname === '/learning' ? 'nav-link active' : 'nav-link'}>
                                    <div id="learning" ><FontAwesomeIcon icon={faPlay} size="sm" /></div>
                                    <small>Learning</small></div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>;
    }
}

export default withRouter(NavBar);