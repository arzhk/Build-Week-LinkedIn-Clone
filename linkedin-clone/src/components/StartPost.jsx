import React from "react";
import { Link } from "react-router-dom";
import PeopleLoaders from "./loaders/PeopleLoaders";
import { Button, Modal } from 'react-bootstrap'
import "./StartPost.css"

class StartPost extends React.Component {
  state = {
      myPost: "",
      modalShow: false, 
  };

  postData = async () => {
    const newPost ={
        text: this.state.myPost,
    }
    try{
        const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 
                'Content-Type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzEwNmVkMjY2ODAwMTcwZWEzZDAiLCJpYXQiOjE2MDY3MzA2MTYsImV4cCI6MTYwNzk0MDIxNn0.0SA5BuCxgs7H-mWOcIfvvED6ga9_s3jGPIvujZ4KSbA',
            }
        
        })
        console.log("complete")
        const json = await res.json()
        console.log(json)
        this.setState({modalShow: false,})
        this.setState({myPost: "",})
     
    }catch(e){
        console.log(e)
    }
  }

  getData = async () => {
    const newPost ={
        text: this.state.myPost,
    }
    try{
        const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
            method: 'GET',
            headers: { 
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmM0YzEwNmVkMjY2ODAwMTcwZWEzZDAiLCJpYXQiOjE2MDY3MzA2MTYsImV4cCI6MTYwNzk0MDIxNn0.0SA5BuCxgs7H-mWOcIfvvED6ga9_s3jGPIvujZ4KSbA',
            }
        
        })
        console.log("GET complete")
        const json = await res.json()
        console.log("this is GET", json)
    }catch(e){
        console.log(e)
    }
  }

  componentDidMount() {
    setTimeout(() => {
        this.postData()
        this.getData()
        
    }, 1000);
  };

  handleClose = () => this.setState({modalShow: false});
  handleShow = () => this.setState({modalShow: true});
  updateInputValue = (evt) => {
    this.setState({
      myPost: evt.target.value
    });
  }

  render() {
    return (
      <div className="mt-5">

        <Modal show={this.state.modalShow} onHide={this.handleClose} dialogClassName="custom-dialog">
            <Modal.Header closeButton>
            <Modal.Title>Create a post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex flex-column ">
                    <div className="d-flex">
                        <img src="https://mpng.subpng.com/20180802/icj/kisspng-user-profile-default-computer-icons-network-video-the-foot-problems-of-the-disinall-foot-care-founde-5b6346121ec769.0929994515332326581261.jpg" alt="" id="myImg"/>
                        <div className="d-flex flex-column">
                            <h6>Khojiakbarkhon Isakov</h6>
                            <Button className="anyone-button text-secondary shadow-none">
                                <i class="fas fa-globe-americas"></i>
                                <p className="mx-2 m-0">Anyone</p>
                                <i class="fas fa-caret-down"></i>
                            </Button>
                        </div>
                    </div>
                    <textarea
                    rows="6"
                    id="myInput"
                    type="text"
                    className="bg-transparent my-0 d-flex justify-content-start align-items-start"
                    value={this.state.myPost} 
                    placeholder={"What do you want to talk about"} 
                    onChange={evt => this.updateInputValue(evt)} />

                    <div className="d-flex align-items-center">
                        <Button className="hashtag-button shadow-none">
                            Add hashtag
                        </Button>
                        <p className="m-0 p-0" id="myP">Help the right people to see your post</p>
                    </div>
                    <div className="d-flex justify-content-between mt-2 align-items-center">
                        <div className="d-flex icons">
                            <Link className="d-flex align-items-center justify-content-center" id="plus"><i className="fas fa-plus text-primary"></i></Link>
                            <Link className="d-flex align-items-center justify-content-center"><i className="far fa-image"></i></Link>
                            <Link className="d-flex align-items-center justify-content-center"><i className="fab fa-youtube"></i></Link>
                            <Link className="d-flex align-items-center justify-content-center"><i className="fas fa-sticky-note"></i></Link>
                        </div>
                        <Button variant="primary" onClick={this.postData} className="post-button">
                            Post
                        </Button>
                    </div>
                    {/* <div className="d-flex" id="my-footer">
                        <div className="d-flex flex-column">
                            <Link>celebrate an occasion</Link>
                            <Link>celebrate an occasion</Link>
                            <Link>celebrate an occasion</Link>
                        </div>
                        <div className="d-flex flex-column">
                            <Link>celebrate an occasion</Link>
                            <Link>celebrate an occasion</Link>
                            <Link>celebrate an occasion</Link>
                        </div>
                    </div> */}
                </div>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center align-items-center" id="my-footer">
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <Link>celebrate an occasion</Link>
                    <Link>celebrate an occasion</Link>
                    <Link>celebrate an occasion</Link>
                </div>
                <div className="d-flex flex-column">
                    <Link>celebrate an occasion</Link>
                    <Link>celebrate an occasion</Link>
                    <Link>celebrate an occasion</Link>
                </div>
            </Modal.Footer>
        </Modal>
        <h5>{this.state.myPost}</h5>
        {console.log("i got in my post", this.state.myPost)}
      </div>
    );
  }
}
export default StartPost;