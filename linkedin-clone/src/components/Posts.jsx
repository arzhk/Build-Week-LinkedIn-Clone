import React from "react";
import Moment from "react-moment";
import { Card, Image, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentDots,
    faGlobeAmericas,
    faGrinWink,
    faHandHoldingHeart,
    faHeart,
    faLightbulb,
    faPaperPlane,
    faShare,
    faSignLanguage,
    faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Comments from "./PostComments";

const Posts = (props) => {
    let { user, text, createdAt, updatedAt, _id } = props.data;
    let users = {};
    if (user !== null) {
        users = { ...user };
    }
    let { image, name, surname, title } = users;
    const [comments, setComments] = React.useState(false);
    const toggleModal = () => setComments(!comments);
    return (
        <Card className="mt-2 p-2 posts">
            <Row className="justify-content-start m-2">
                <Dropdown>
                    <Dropdown.Toggle
                        variant="light"
                        className="rounded-pill"
                        style={{ fontSize: "1.5rem", color: "rgba(0,0,0,0.5)" }}
                    >
                        <i className="fas fa-ellipsis-h"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            <i className="fas fa-bookmark mr-4" style={{ height: 16, width: 16 }}></i>Save
            </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            <i className="fas fa-sliders-h mr-4" style={{ height: 16, width: 16 }}></i>Improve Feed
            </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            <i className="fas fa-eye-slash mr-4" style={{ height: 16, width: 16 }}></i>Hide this post
            </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Image src={image} roundedCircle style={{ height: "50px", width: "50px" }} fluid />

                <Col className="d-flex flex-column">
                    <Row>
                        <Link to={"/profile/" + users._id} className="text-dark">
                            <h6 className="d-inline-block ml-3 mr-2 m-0 p-0 post-name-clickable">
                                {name} {surname}
                            </h6>
                        </Link>
                        <small className="text-muted m-0 p-0"> - 1st</small>
                    </Row>
                    <small className="text-muted  m-0 p-0">{title}</small>
                    <small className="text-muted  m-0 p-0">
                        {" "}
                        {updatedAt !== "" ? (
                            <Moment fromNow>{createdAt}</Moment>
                        ) : (
                                <span>
                                    <Moment fromNow>{updatedAt}</Moment> - Edited
                                </span>
                            )}
            . - <FontAwesomeIcon icon={faGlobeAmericas} className="ml-1" />
                    </small>
                </Col>
            </Row>

            <Card.Body className="d-flex justify-content-between border-bottom mb-2 ">{text}</Card.Body>
            <div className="d-flex flex-column ml-2">
                <div className="like-choice align-items-center swing-in-top-fwd">
                    <Row className="ml-2">
                        <Button variant="light" className="likeBtn" ><FontAwesomeIcon icon={faThumbsUp} /> Like</Button>
                        <Button variant="light" onClick={toggleModal}><FontAwesomeIcon icon={faCommentDots} /> Comment</Button>
                        <Button variant="light"><FontAwesomeIcon icon={faShare} /> Share</Button>
                        <Button variant="light"><FontAwesomeIcon icon={faPaperPlane} /> Send</Button>
                        <Row className="like-choice" >
                            <Button variant="link"><FontAwesomeIcon icon={faThumbsUp} /></Button>
                            <Button variant="link"><FontAwesomeIcon icon={faSignLanguage} /></Button>
                            <Button variant="link"><FontAwesomeIcon icon={faHandHoldingHeart} /></Button>
                            <Button variant="link"><FontAwesomeIcon icon={faHeart} /></Button>
                            <Button variant="link"><FontAwesomeIcon icon={faLightbulb} /></Button>
                            <Button variant="link"><FontAwesomeIcon icon={faGrinWink} /></Button>
                        </Row>

                    </Row>
                </div>
            </div>
            {comments && <Comments user={props.user} postId={_id} />}
        </Card>

    )
}

export default Posts;
