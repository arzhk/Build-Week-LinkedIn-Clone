import React from "react";
import Moment from "react-moment";
import { Card, Image, Row, Col, Button, Dropdown, Modal } from "react-bootstrap";
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

class Posts extends React.Component {


    state = {
        /************STATE FOR POSTS************* */
        comments: false,
        deletePosts: false,
        reactionsModal: false,
        /******STATES FOR REACTION*******/
        reaction: "1",
        AllComments: [],
        AllReactions: [],
        CommentsPost: [],
        icon: faThumbsUp,
        color: "gray",
        word: "Like",
        numberLikes: 0,
        numberComments: 0,
        liked: [false, ""]
    }

    toggleComments = () => this.setState({ comments: !this.state.comments })
    toggleDeletePosts = () => this.setState({ deletePost: !this.state.deletePosts })
    toggleReactions = () => this.setState({ reactionsModal: !this.state.reactionsModal })

    /*****************REACTIONS************************/

    /******FUNCTIONS FOR REACTION*******/
    url = "https://striveschool-api.herokuapp.com/api/comments/"

    componentDidMount = () => {
        // this.getReactions();
    }

    getReactions = async () => {
        try {
            let response = await fetch(this.url + this.props.data._id, {
                method: 'GET',
                headers: new Headers({
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
                }),
            });
            if (response.ok) {
                let currentState = { ...this.states }
                currentState.AllComments = await response.json();
                currentState.AllReactions = currentState.AllComments.filter((comment) => comment.comment === '/reactions');
                currentState.CommentsPost = currentState.AllComments.filter((comment) => comment.comment !== '/reactions');
                currentState.numberComments = currentState.AllComments.length - currentState.AllReactions.length;
                currentState.numberLikes = currentState.AllReactions.length;
                let userReaction = currentState.AllReactions.filter((comment) => comment.author === 'arzhk');
                currentState.liked = userReaction.length > 0 && [true, userReaction[0]._id]
                this.setState(currentState)
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }

    }

    postReactions = async (rate) => {
        let commentReaction = {
            elementId: this.props.data._id,
            rate: rate,
            comment: '/reactions',
        }
        try {
            let response = await fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(commentReaction),
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
                }),
            });
            if (response.ok) {
                this.getReactions();
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }

    }

    deletePost = async (id) => {
        try {
            let response = await fetch(this.url + id, {
                method: 'DELETE',

                headers: new Headers({

                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
                }),
            });
            if (response.ok) {
                console.log(await response.json())
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }

    }
    putReactions = async (rate, id) => {
        console.log("put")
        let commentReaction = {
            elementId: this._id,
            rate: rate,
            comment: '/reactions',
        }
        try {
            let response = await fetch(this.url + id, {
                method: 'PUT',
                body: JSON.stringify(commentReaction),
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
                }),
            });
            if (response.ok) {
                this.getReactions();
            } else {
                console.log(response)
            }
        } catch (error) {
            console.log(error)
        }

    }

    handleChange = (rate) => {
        this.setState({ reaction: rate });
        this.likeButton(rate);
        this.state.liked[0] ? this.putReactions(rate, this.state.liked[1]) : this.postReactions(rate)
    }

    likeButton = (rate) => {

        switch (rate) {
            case 1:
                this.setState({ icon: faThumbsUp })
                this.setState({ color: "#5894f5" })
                this.setState({ word: "Like" })
                break;
            case 2:
                this.setState({ icon: faSignLanguage })
                this.setState({ color: "#40ba32" })
                this.setState({ word: "Celebrate" })
                break;
            case 3:
                this.setState({ icon: faHandHoldingHeart })
                this.setState({ color: "#8f4f9c" })
                this.setState({ word: "Support" })
                break;
            case 4:
                this.setState({ icon: faHeart })
                this.setState({ color: "#b81d1d" })
                this.setState({ word: "Love" })
                break;
            case 5:
                this.setState({ icon: faLightbulb })
                this.setState({ color: "#dbcd00" })
                this.setState({ word: "Insightful" })
                break;

            default:
                this.setState({ icon: faThumbsUp })
                this.setState({ color: "gray" })
                this.setState({ word: "Like" })
                break;
        }
    }
    render() {
        let { image, user, text, createdAt, updatedAt, _id } = this.props.data;
        let { deletePost, editPost, userID, profilePicture, } = this.props
        let { name, surname, title } = user
        let { comments, deletePosts, reactionsModal, AllReactions, numberComments, numberLikes, color, icon, word, CommentsPost } = this.state
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
                            {user._id === userID && <>
                                <Dropdown.Item onClick={editPost(_id, text)}>
                                    <i className="fas fa-edit mr-4" style={{ height: 16, width: 16 }}></i>Edit this post
                </Dropdown.Item>
                                <Dropdown.Item onClick={this.toggleDeletePosts}>
                                    <i className="fas fa-trash-alt mr-4 text-danger" style={{ height: 16, width: 16 }}></i>Delete this post
                </Dropdown.Item></>}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Image src={user.image} roundedCircle style={{ height: "50px", width: "50px" }} fluid />

                    <Col className="d-flex flex-column">
                        <Row>
                            <Link to={"/profile/" + user._id} className="text-dark">
                                <h6 className="d-inline-block ml-3 mr-2 m-0 p-0 post-name-clickable">
                                    {name} {surname}
                                </h6>
                            </Link>
                            <small className="text-muted m-0 p-0"> - 1st</small>
                        </Row>
                        <small className="text-muted  m-0 p-0">{title}</small>
                        <small className="text-muted  m-0 p-0">
                            {" "}
                            {updatedAt === createdAt ? (
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

                <Card.Body className="d-flex justify-content-between mb-2 ">
                    <Col>
                        <Row><p>{text}</p></Row>
                        <Row>{image !== undefined && image !== null && !image.startsWith("file") && !image.startsWith("blob") && <Image src={image} fluid />}</Row>
                    </Col>
                </Card.Body>
                <p className="border-bottom mb-2 pb-3" onClick={this.toggleReactions}> {numberLikes > 0 && <><FontAwesomeIcon icon={faThumbsUp} style={{ color: "5894f5" }} /> {numberLikes}</>}{numberComments > 0 && <> - {numberComments} Comments</>} </p>

                <Row className="mx-2 reactions d-flex justify-content-around">
                    <Button variant="light" className="likeBtn" onClick={() => this.handleChange(1)} style={{ color: color }} ><FontAwesomeIcon
                        icon={icon} /><span className="d-sm-none d-lg-inline-block"> {word}</span> </Button>
                    <Button variant="light" onClick={this.toggleComments}><FontAwesomeIcon icon={faCommentDots} /><span className="d-sm-none d-lg-inline-block">Comment</span> </Button>
                    <Button variant="light"><FontAwesomeIcon icon={faShare} /> <span className="d-sm-none d-lg-inline-block">Share</span> </Button>
                    <Button variant="light"><FontAwesomeIcon icon={faPaperPlane} /> <span className="d-sm-none d-lg-inline-block">Send</span></Button>
                    <Row className="like-choice" >
                        <Button variant="link"><FontAwesomeIcon onClick={() => this.handleChange(1)} icon={faThumbsUp} /></Button>
                        <Button variant="link"><FontAwesomeIcon onClick={() => this.handleChange(2)} icon={faSignLanguage} /></Button>
                        <Button variant="link"><FontAwesomeIcon onClick={() => this.handleChange(3)} icon={faHandHoldingHeart} /></Button>
                        <Button variant="link"><FontAwesomeIcon onClick={() => this.handleChange(4)} icon={faHeart} /></Button>
                        <Button variant="link"><FontAwesomeIcon onClick={() => this.handleChange(5)} icon={faLightbulb} /></Button>
                        <Button variant="link"><FontAwesomeIcon icon={faGrinWink} /></Button>
                    </Row>
                </Row>

                {comments && <Comments comments={CommentsPost} profilePicture={profilePicture} postId={this.props.data._id} getComments={this.getReactions} />}


                {deletePosts &&
                    <Modal show={true} onHide={this.toggleDeletePosts}>
                        <Modal.Header closeButton onClick={this.toggleDeletePosts}>
                            <Modal.Title>Delete Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Are you sure you want to delete this Post?</h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" className="px-5" onClick={this.toggleDeletePosts}>No</Button>
                            <Button variant="danger"
                                className="px-5"
                                onClick={() => {
                                    deletePost(_id)
                                    setTimeout(() => {
                                        this.toggleDeletePosts()
                                    }, 500);
                                }}
                            >Yes</Button>
                        </Modal.Footer>
                    </Modal>}
                {reactionsModal &&
                    <Modal show={true} id="reactionsModal" onHide={this.toggleReactions}>
                        <Modal.Header closeButton onClick={this.toggleReactions}>
                            <Modal.Title>Reactions</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Col>
                                <Row className="justify-content-around pl-2"><p>Users Name</p><p>Reaction</p></Row>
                                {AllReactions.map((reaction) => <Row className="justify-content-around m-2 ml-0 pb-2 border-bottom" >
                                    <div>{reaction.author}</div> <FontAwesomeIcon size="4x"
                                        icon={
                                            (() => {
                                                let result;

                                                switch (reaction.rate) {
                                                    case 2:
                                                        result = faSignLanguage;
                                                        break;
                                                    case 3:
                                                        result = faHandHoldingHeart;
                                                        break;
                                                    case 4:
                                                        result = faHeart;
                                                        break;
                                                    case 5:
                                                        result = faLightbulb;
                                                        break;
                                                    default:
                                                        result = faSignLanguage;
                                                        break;
                                                }
                                                console.log(reaction.rate)
                                                return result;
                                            })()
                                        } />
                                </Row>)}
                            </Col>
                        </Modal.Body>

                    </Modal>}

            </Card>
        );

    }

}

export default Posts;
