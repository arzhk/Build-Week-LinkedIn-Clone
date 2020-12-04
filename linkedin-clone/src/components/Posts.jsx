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

const Posts = (props) => {
  let { user, text, createdAt, updatedAt, _id } = props.data;
  let { deletePost, editPost, userID } = props;
  let users = {};
  if (user !== null) {
    users = { ...user };
  }
  let { image, name, surname, title } = users;

  const [comments, setComments] = React.useState(false);
  const [deletePosts, setDeletePosts] = React.useState(false);

  const toggleComments = () => setComments(!comments);
  const toggleDeletePosts = () => setDeletePosts(!deletePosts);

  /*****************REACTIONS************************/
  /******STATES FOR REACTION*******/
  let [reaction, setReaction] = React.useState("1");
  let [AllComments, setAllComments] = React.useState([]);
  let [AllReactions, setAllReactions] = React.useState([]);
  let [icon, setIcon] = React.useState(faThumbsUp);
  let [color, setColor] = React.useState("gray");
  let [word, setWord] = React.useState("Like");
  let [numberLikes, setNumberLikes] = React.useState(0);
  let [numberComments, setNumberComments] = React.useState(0);
  let [liked, setLiked] = React.useState([false, ""]);
  /******FUNCTIONS FOR REACTION*******/
  const url = "https://striveschool-api.herokuapp.com/api/comments/";

  const getReactions = async () => {
    try {
      let response = await fetch(url + _id, {
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        setAllComments(await response.json());
        setAllReactions(AllComments.filter((comment) => comment.comment === "/reactions"));
        setNumberComments(AllComments.length - AllReactions.length);
        setNumberLikes(AllReactions.length);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postReactions = async (rate) => {
    let commentReaction = {
      elementId: _id,
      rate: rate,
      comment: "/reactions",
    };
    try {
      let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(commentReaction),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        getReactions();
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const putReactions = async (rate, id) => {
    let commentReaction = {
      elementId: _id,
      rate: rate,
      comment: "/reactions",
    };
    try {
      let response = await fetch(url + id, {
        method: "put",
        body: JSON.stringify(commentReaction),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleReactions = () => {
    let userReaction = AllReactions.filter((reaction) => reaction.elementId === _id);
    if (userReaction.length > 0) {
      setLiked([true, userReaction[0]._id]);
    }
  };

  const handleChange = (rate) => {
    handleReactions();
    setReaction(rate);
    likeButton(rate);
    liked[0] ? putReactions(rate, liked[1]) : postReactions(rate);
  };

  const likeButton = (rate) => {
    switch (rate) {
      case 1:
        setIcon(faThumbsUp);
        setColor("#5894f5");
        setWord("Like");
        break;
      case 2:
        setIcon(faSignLanguage);
        setColor("#40ba32");
        setWord("Celebrate");
        break;
      case 3:
        setIcon(faHandHoldingHeart);
        setColor("#8f4f9c");
        setWord("Support");
        break;
      case 4:
        setIcon(faHeart);
        setColor("#b81d1d");
        setWord("Love");
        break;
      case 5:
        setIcon(faLightbulb);
        setColor("#dbcd00");
        setWord("Insightful");
        break;

      default:
        setIcon(faThumbsUp);
        setColor("gray");
        setWord("Like");
        break;
    }
  };
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
            {users._id === userID && (
              <>
                <Dropdown.Item onClick={() => editPost(_id, text)}>
                  <i className="fas fa-edit mr-4" style={{ height: 16, width: 16 }}></i>Edit this post
                </Dropdown.Item>
                <Dropdown.Item onClick={toggleDeletePosts}>
                  <i className="fas fa-trash-alt mr-4 text-danger" style={{ height: 16, width: 16 }}></i>Delete this
                  post
                </Dropdown.Item>
              </>
            )}
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
          <Row>
            <p>{text}</p>
          </Row>
          <Row>
            {props.data.image !== undefined &&
              props.data.image !== null &&
              !props.data.image.startsWith("file") &&
              !props.data.image.startsWith("blob") && <Image src={props.data.image} fluid />}
          </Row>
        </Col>
      </Card.Body>
      <p className="border-bottom mb-2 ">
        {" "}
        {numberLikes > 0 && (
          <>
            <FontAwesomeIcon icon={faThumbsUp} style={{ color: "5894f5" }} /> {numberLikes}
          </>
        )}
        {numberComments > 0 && <> - {numberComments} Comments</>}{" "}
      </p>

      <Row className="mx-2 reactions d-flex justify-content-around">
        <Button variant="light" className="likeBtn" onClick={() => handleChange(1)} style={{ color: color }}>
          <FontAwesomeIcon icon={icon} />
          <span className="d-sm-none d-lg-inline-block"> {word}</span>{" "}
        </Button>
        <Button variant="light" onClick={toggleComments}>
          <FontAwesomeIcon icon={faCommentDots} />
          <span className="d-sm-none d-lg-inline-block">Comment</span>{" "}
        </Button>
        <Button variant="light">
          <FontAwesomeIcon icon={faShare} /> <span className="d-sm-none d-lg-inline-block">Share</span>{" "}
        </Button>
        <Button variant="light">
          <FontAwesomeIcon icon={faPaperPlane} /> <span className="d-sm-none d-lg-inline-block">Send</span>
        </Button>
        <Row className="like-choice">
          <Button variant="link">
            <FontAwesomeIcon onClick={() => handleChange(1)} icon={faThumbsUp} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon onClick={() => handleChange(2)} icon={faSignLanguage} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon onClick={() => handleChange(3)} icon={faHandHoldingHeart} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon onClick={() => handleChange(4)} icon={faHeart} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon onClick={() => handleChange(5)} icon={faLightbulb} />
          </Button>
          <Button variant="link">
            <FontAwesomeIcon icon={faGrinWink} />
          </Button>
        </Row>
      </Row>
      {comments && <Comments user={props.user} postId={_id} />}
      {deletePosts && (
        <Modal show={true} onHide={toggleDeletePosts}>
          <Modal.Header closeButton onClick={toggleDeletePosts}>
            <Modal.Title>Delete Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Are you sure you want to delete this Post?</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" className="px-5" onClick={toggleDeletePosts}>
              No
            </Button>
            <Button
              variant="danger"
              className="px-5"
              onClick={() => {
                deletePost(_id);
                setTimeout(() => {
                  toggleDeletePosts();
                }, 500);
              }}
            >
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Card>
  );
};

export default Posts;
