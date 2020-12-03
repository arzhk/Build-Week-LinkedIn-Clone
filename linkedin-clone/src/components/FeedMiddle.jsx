import { faNewspaper, faPhotoVideo, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Form, Modal, Row } from "react-bootstrap";
import ArticleModal from "./ArticleModal";
import EventsModal from "./EventsModal";
import PhotoModal from "./PhotoModal";
import Posts from "./Posts";
import StartPost from "./StartPost";

class FeedMiddle extends React.Component {
  state = {
    photoModal: false,
    videoModal: false,
    articleModal: false,
    startPostModal: false,
    eventsModal: false,
    editModal: false,
    currentPostId: "",
    currentPost: "",
    loadingPosts: false,
    posts: [],
  };

  getPosts = async () => {
    let url = "https://striveschool-api.herokuapp.com/api/posts";

    try {
      const response = await fetch(url, {
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        const result = await response.json();
        this.setState({ posts: result.reverse(), loadingPosts: true });
      } else {
        console.log(response);
        this.setState({ loadingPosts: true });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loadingPosts: true });
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.getPosts();
    }, 1000);
  };
  postData = async (data) => {
    let newPost = {
      text: data,
    };
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      if (response.ok) {
        setTimeout(() => {
          this.getPosts();
        }, 1000);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  };
  deletePost = async (id) => {
    let url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const response = await fetch(url + id, {
        method: "DELETE",
        headers: new Headers({
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        }),
      });
      if (response.ok) {
        setTimeout(() => {
          this.getPosts();
        }, 1000);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }
  handelChange = (e) => {
    this.setState({
      currentPost: e.target.value,
    });
  }
  sendPosts = (file, item) => {
    this.toggleModal(item);
    this.postData(file);
  };
  putData = async (id) => {
    let editPost = {
      text: this.state.currentPost,
    };
    console.log(editPost)
    let url = "https://striveschool-api.herokuapp.com/api/posts/";
    try {
      const response = await fetch(url + id, {
        method: "PUT",
        body: JSON.stringify(editPost),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzQ4ZmVkMjY2ODAwMTcwZWEzZDgiLCJpYXQiOjE2MDY3MzA4OTUsImV4cCI6MTYwNzk0MDQ5NX0.Qzj6OQCKSyxDgEgIadVbBI70XPPAgDlcGoWJEKyM6cU",
        },
      });
      if (response.ok) {
        setTimeout(() => {
          this.getPosts();
        }, 1000);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }
  editPost = (id, post) => {
    this.toggleModal("edit");
    this.setState({ currentPostId: id, currentPost: post });
  };
  toggleModal = (item) => {
    const currentstate = { ...this.state };
    currentstate[item + "Modal"] = !currentstate[item + "Modal"];
    this.setState(currentstate);
  };
  render() {
    const { photoModal, videoModal, articleModal, startPostModal, eventsModal, loadingPosts, posts, editModal, currentPost, currentPostId } = this.state;
    const { jobTitle, name, userID } = this.props;
    return (
      <div id="feedMiddle">
        <div className="brdr-bottom pb-4">
          <Card className="px-4 pt-3 pb-2" id="cardPost">
            <div>
              <Button
                variant="light"
                className="w-100 rounded-pill font-small text-left"
                onClick={() => this.toggleModal("startPost")}
              >
                <i className="far fa-edit grey-text" style={{ fontSize: "1.2rem" }}></i>
                <span className="ml-2 grey-text">Start a post</span>
              </Button>
            </div>
            <Row className="justify-content-around mt-2">
              <Button onClick={() => this.toggleModal("photo")} variant="light">
                <FontAwesomeIcon icon={faPhotoVideo} style={{ color: "rgb(112, 181, 249)" }} />{" "}
                <span className="ml-1">Photo</span>
              </Button>
              <Button onClick={() => this.toggleModal("video")} variant="light">
                <i className="fab fa-youtube" style={{ color: "rgb(231, 163, 62)" }}></i>
                <span className="ml-1">Video</span>
              </Button>
              <Button onClick={() => this.toggleModal("events")} variant="light">
                <i className="far fa-calendar" style={{ color: "rgb(160, 180, 183)" }}></i>{" "}
                <span className="ml-1">Event</span>
              </Button>
              <Button onClick={() => this.toggleModal("startPost")} variant="light">
                <i className="fas fa-indent" style={{ color: "rgb(127, 193, 94)" }}></i>
                <span className="ml-2">Write article</span>
              </Button>
            </Row>
          </Card>
        </div>
        <StartPost controlls={this.toggleModal} />
        {photoModal && <PhotoModal title="photo" show={true} onHide={this.toggleModal} />}
        {videoModal && <PhotoModal title="video" show={true} onHide={this.toggleModal} />}
        {articleModal && <ArticleModal show={true} />}
        {eventsModal && <EventsModal title="events" show={true} onHide={this.toggleModal} />}
        {startPostModal && (
          <StartPost show={true} name={name} userID={userID} onHide={this.toggleModal} sendPosts={this.sendPosts} />
        )}
        {loadingPosts ? (
          posts.length > 0 && posts.map((post, key) => <Posts name={name} userID={userID} key={key} data={post} deletePost={this.deletePost} editPost={this.editPost} />)
        ) : (
            <p>Loading...</p>
          )}
        {editModal && <div>
          <Modal show={editModal} id="editModal" onHide={() => this.toggleModal("edit")}>
            <Form onSubmit={() => this.putData(currentPostId)}>
              <Modal.Header closeButton onClick={() => this.toggleModal("edit")}>
                <Modal.Title>Edit Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <Form.Group>
                  <Form.Label>Edit your post</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="description"
                    rows={3}
                    value={currentPost}
                    onChange={this.handelChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" className="rounded-pill" type="submit">
                  Save
                        </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>}
      </div>
    );
  }
}

export default FeedMiddle;
