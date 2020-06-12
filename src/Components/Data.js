import React from 'react'
import { Col,Row } from 'react-bootstrap';
import './Data.css';
import logo from './flag.jpg';

const Data = ({entries}) =>{
    console.log(entries);
    const entryList = entries.map(entry => 
        {
             return(
                <div className="Data" key={entry.id}>
                    <Row>
                        <Col xs={3}><img className="imgResponsive" src={logo} alt="logo"/>
                        </Col>
                        <Col xs={6} className='text1'>
                        <Row> { entry.continent } </Row>
                        <Row> { entry.team_name } </Row>
                        <Row> Rank { entry.rank } </Row>
                        </Col>
                        <Col className='text1'>{ entry.resources }</Col>
                    </Row>
                    <hr  style={{color: 'black',backgroundColor: 'black',borderColor : 'black',margin:'0px'}}/>
                </div>
            )
        })
    return(
        <div>
            { entryList }
        </div>
    )
}

export default Data;