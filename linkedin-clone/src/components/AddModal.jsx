import React from 'react';
import { Button, Form, Modal, Row } from 'react-bootstrap';


class AddModal extends React.Component {
    state = {
        show: true,
        experience: {},
    }

    handelChange = (e) => {
        let experience = { ...this.state.experience };
        let currentId = e.currentTarget.id;
        experience[currentId] = e.currentTarget.value;
        this.setState({ experience });
    }
    handelSave = () => {
        this.props.addExperiencePost(this.state.experience)
    }
    componentDidMount = () => {
        this.setState({ show: this.props.show })
    }
    handleClose = () => this.setState({ show: false })
    render() {
        return <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="jobtitle">
                        <Form.Label>Title*</Form.Label>
                        <Form.Control type="text" id="role" placeholder="Ex. Retail Sales Manager" value={this.state.experience.role} onChange={this.handelChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Employment type</Form.Label>
                        <Form.Control as="select">
                            <option>-</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Self-employed</option>
                            <option>Freelance</option>
                            <option>Contract</option>
                            <option>Internship</option>
                        </Form.Control>
                    </Form.Group>
                    <a>Learn more</a>
                    <Form.Group controlId="company">
                        <Form.Label>Company*</Form.Label>
                        <Form.Control type="text" placeholder="Ex: Microsoft" id="company" value={this.state.experience.company} onChange={this.handelChange} />
                    </Form.Group>
                    <Form.Group controlId="Location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" id="area" placeholder="Ex: London, United Kingdom" value={this.state.experience.area} onChange={this.handelChange} />
                    </Form.Group>
                    <Form.Group controlId="working">
                        <Form.Check type="checkbox" label="I am currently working in this role" checked />
                    </Form.Group>
                    <Form.Group controlId="date">
                        <Form.Label>Start Date*</Form.Label>
                        <Form.Control type="date" value={this.state.experience.startDate} />
                    </Form.Group>
                    <Form.Group controlId="updateIndustry">
                        <Form.Check type="checkbox" label="Update my industry" />
                    </Form.Group>
                    <Form.Group controlId="updatedeadline">
                        <Form.Check type="checkbox" label="Update my headline" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <small>Media</small>
                    <small>Add or link to external documents, photos, sites, videos, and presentations.</small>
                    <Row>
                        <Button variant="primary" className="rounded-pill">
                            Upload
                         </Button>
                        <Button variant="primary-outlined" className="rounded-pill">
                            Link
                        </Button>
                    </Row>
                    <a>Supported formats</a>
                </Form>
            </Modal.Body>
            <Row id="share">
                <Form.Group controlId="shareWithNetwork">
                    <Form.Check type="checkbox" label="If enabled, your network may be informed of job changes, education changes, and work anniversaries. Learn how these are shared and when" />
                </Form.Group>
            </Row>
            <Modal.Footer>
                <Button variant="primary" className="rounded-pill" onClick={this.handelSave}>
                    Save
          </Button>
            </Modal.Footer>
        </Modal>;
    }
}


export default AddModal;