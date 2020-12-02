import React from 'react';
import { Row, Image, Form, Col } from 'react-bootstrap';
import Moment from 'react-moment';

class Comments extends React.Component {
    state = {
        comments: [],
        loading: true,
        addComment: "",
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.getComments(this.props.postId)
        }, 1000);
    }
    getComments = async (id) => {
        this.setState({ loading: true })
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
                headers: {
                    "Authorization": "Bearer ",
                }
            })
            if (response.ok) {
                let comments = await response.json();
                console.log(comments)
                this.setState({ comments, loading: false })
                console.log(this.state)
            }
        } catch (e) {
            console.log("error happened, that's life", e)
            this.setState({ loading: false })
        }
    }

    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            addComment: e.target.value
        });
    }
    handelPost = async (e) => {
        e.preventDefault()
        console.log("posting")
        let review = {
            comment: this.state.addComment,
            rate: 0,
            elementId: this.props.postId
        }
        try {
            const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: 'POST',
                body: JSON.stringify(review),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer  ',
                }

            })
            if (response.ok) {
                this.getComments();
                this.setState({ loading: true })
            } else {
                console.log(response)
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        const { user, postId } = this.props
        const { comments, loading, addComment } = this.state
        return <div className="mt-2 pt-2" >
            <Col>
                <div className="row">
                    <Col sm={1}>
                        <Image style={{ width: "30px", height: "30px" }} />
                    </Col>
                    <Col sm={10} className="p-0">
                        <Form onSubmit={this.handelPost} >
                            <Form.Group>
                                <Form.Control type="text" className="rounded-pill w-100  p-3" id={addComment} value={addComment} onInput={this.handleChange} placeholder="Add a comment..." />
                            </Form.Group>
                        </Form>
                    </Col>
                </div>
                <Row>
                    {loading ? comments.length > 0 && comments.map((comment) =>
                        <Col>
                            <h6>{comment.author}</h6>
                            <small className="text-muted"><Moment fromNow>{comment.createdAt}</Moment> </small>
                            <p>{comment.comment}</p>
                        </Col>
                    ) : <p>Loading...</p>}
                </Row>
            </Col>
        </div>;
    }
}

export default Comments;