import React,{ Component } from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import './Entry.css';
import Data from './Data';

class Entry extends Component{
    constructor(props){
        super(props);
        this.state = {
            entries:[
                    {id:1,rank: 1,continent: "India",team_name: "Abhyudaya",resources: 100},
                    {id:2,rank: 2,continent: "India",team_name: "Abhyudaya",resources: 100},
                    {id:3,rank: 3,continent: "India",team_name: "Abhyudaya",resources: 100},
                    {id:4,rank: 4,continent: "India",team_name: "Abhyudaya",resources: 100},
                    {id:5,rank: 5,continent: "India",team_name: "Abhyudaya",resources: 100}
                 ]
        } 
    }
    render(){
        return(
            <div className='Entry'>
                <Container>
                <Row>
                    <Col xs={12} md={8} id='text'><h4>LEADERBOARD</h4></Col>
                </Row>
                <Data entries={this.state.entries} />
                </Container>
            </div>
        )
    }
}

export default Entry;