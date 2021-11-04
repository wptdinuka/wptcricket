import React from 'react';
import '../../App.css';
import './Schedule.css'

 


function Schedule() {
  return (
  <>
  <div className="HeadLine"><h1>SCHEDULE-2021</h1></div>
  <div className='T2'>
  <h2>Groups, Stages Schedules and Teams</h2>
  <table>
        <thead>
          <tr>
            <th>Stage</th>
            <th>Group</th>
            <th>Teams</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Round 1</td>
            <td>Group A</td>
            <td>Sri Lanka, Ireland, the Netherlands and Namibia</td>
          </tr>
          <tr>
            <td>Round 2</td>
            <td>Group B</td>
            <td>Bangladesh, Scotland, Papua New Guinea and Oman</td>
          </tr>
          <tr>
            <td>Super 12</td>
            <td>Group 1</td>
            <td>England, Australia, South Africa, West Indies, A1 and B2</td>
          </tr>
          <tr>
            <td>Super 12</td>
            <td>Group 2</td>
            <td>India, Pakistan, New Zealand, Afghanistan, A2 and B1</td>
          </tr>
        </tbody>
      </table>
      </div>

    <div className="T1">
      <h2>Round 1 Fixture</h2>
      <table>
        <thead>
          <tr>
          <th>Match Numbr</th>
            <th>Match Date</th>
            <th>Opponent</th>
            <th>Match Time</th>
            <th>Match Veneu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>4</td>
            <td>18-Oct-21</td>
            <td>Namibia</td>
            <td>4 pm</td>
            <td>Abu Dhabi</td>
          </tr>
          <tr>
          <td>8</td>
            <td>20-Oct-21</td>
            <td>Ireland</td>
            <td>4 pm</td>
            <td>Abu Dhabi</td>
          </tr>
          <tr>
          <td>12</td>
            <td>22-Oct-21</td>
            <td>Netherlands</td>
            <td>4 pm</td>
            <td>Sharjah</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="T3">
      <h2>Super 12 Group 2 Fixture</h2>
      <table>
        <thead>
          <tr>
          <th>Match Numbr</th>
            <th>Match Date</th>
            <th>Opponent</th>
            <th>Match Time</th>
            <th>Match Veneu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>15</td>
            <td>24-Oct-21</td>
            <td>Bangladesh</td>
            <td>3.30pm</td>
            <td>Sharjah</td>
          </tr>
          <tr>
          <td>22</td>
            <td>28-Oct-21</td>
            <td>Australia</td>
            <td>4 pm</td>
            <td>Dubai</td>
          </tr>
          <tr>
          <td>25</td>
            <td>30-Oct-21</td>
            <td>South Africa</td>
            <td>12 pm</td>
            <td>Sharjah</td>
          </tr>
          <tr>
            <td>29</td>
            <td>01-Nov-21</td>
            <td>England</td>
            <td>3 pm</td>
            <td>Sharjah</td>
          </tr>
          <tr>
            <td>35</td>
            <td>04-Nov-21</td>
            <td>West Indies</td>
            <td>3 pm</td>
            <td>Abu Dhabi</td>
          </tr>
        </tbody>
      </table>
      </div>
 </> 
  );
}


export default Schedule