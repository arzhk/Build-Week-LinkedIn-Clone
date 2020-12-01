import React from 'react';

const ExperienceItem = (props) => {

    return <ListGroup.Item variant="light" className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-start">
            <div className="imgPlace mr-4"></div>
            <div className="d-flex flex-column">
                <h5 className="mb-0 font-weight-normal">{props.experience.role}</h5>
                <p className="mb-0 ">{props.experience.company}</p>
                <p className="mb-0 font-weight-light">{props.experience.startDate}</p>
                <small className="font-weight-light">{props.experience.area}</small>
            </div>
        </div>
        <a onclick={this.props.editModal}><i className="fas fa-pen "></i></a>
    </ListGroup.Item>;
}

ExperienceItem.propTypes = propTypes;
ExperienceItem.defaultProps = defaultProps;


export default ExperienceItem;