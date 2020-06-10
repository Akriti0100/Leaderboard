import React,{ Component } from 'react';
import Entry from './Entry';

class Leaderboard extends Component{
    state = {
        info : {continent: "America",
                team_name: "Abhyudaya",
                rank: 1,
                resources: 100}
        } 
    render(){
        return(
            <div className="table-head">
                <table>
                    <thead>
                    <tr>
                        <th colSpan="5">Continent</th>
                        <th colSpan="5">Team Name</th>
                        <th colSpan="5">Rank</th>
                        <th colSpan="5">Resources</th>
                    </tr>
                    </thead>
                    <Entry item = {this.state.info} />
                </table>
            </div>
        )
    }
}

export default Leaderboard;