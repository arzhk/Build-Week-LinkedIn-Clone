import React from 'react';
import Moment from 'react-moment';
import { ListGroup } from 'react-bootstrap';

const ExperienceItem = (props) => {

    return <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-start">
            <div className="imgPlace mr-4"></div>
            <div className="d-flex flex-column">
                <h5 className="mb-0 font-weight-normal">{props.experience.role}</h5>
                <p className="mb-0 ">{props.experience.company}</p>
                <p className="mb-0 font-weight-light"><Moment format="MMM YYYY">{props.experience.startDate}</Moment> - <Moment format="MMM YYYY" >{props.experience.endDate}</Moment></p>
                <small className="font-weight-light">{props.experience.area}</small>
            </div>
        </div>
        <p onClick={() => props.editModal(props.experience)}><i className="fas fa-pen "></i></p>
    </ListGroup.Item>;
}

export default ExperienceItem;