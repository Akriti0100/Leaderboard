import React,{ Component } from 'react';
import './Leaderboard.css';

class Leaderboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            entries:[
                    {id:1,rank: 1,continent: "America",team_name: "Abhyudaya",resources: 100},
                    {id:2,rank: 2,continent: "America",team_name: "Abhyudaya",resources: 100},
                    {id:3,rank: 3,continent: "America",team_name: "Abhyudaya",resources: 100},
                    {id:4,rank: 4,continent: "America",team_name: "Abhyudaya",resources: 100},
                    {id:5,rank: 5,continent: "America",team_name: "Abhyudaya",resources: 100}
                 ]
        } 
    }
    renderTableData() {
      return (this.state.entries.map((entry, index) => {
         const { id,continent, team_name, rank, resources } = entry //destructuring
         return (
            <tr key={id}>
               <td>{rank}</td>
               <td>{continent}</td>
               <td>{team_name}</td>
               <td>{resources}</td>
            </tr>
         )
      }))
   }
   renderTableHeader() {
      let header = Object.keys(this.state.entries[0]).slice(1,5)
      return (header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      }))
   }
    render(){
        return(
            <div style={{display: "flex",flexDirection:"column",justifyContent: "center",alignItems: "center"}}>
                <h4 id='title'>LEADERBOARD</h4>
                <table id='students'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Leaderboard;