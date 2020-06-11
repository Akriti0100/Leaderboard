import React from 'react';
import { Col } from 'reactstrap';

const Entry = (props) =>{
    return(
        <div>
                <Col xs="6" sm="4"> {props.item.continent} </Col>
                <Col xs="6" sm="4"> {props.item.team_name} </Col>
                <Col xs="6" sm="4"> {props.item.rank} </Col>
                <Col xs="6" sm="4"> {props.item.resources} </Col>
        </div>
    )
}

export default Entry;