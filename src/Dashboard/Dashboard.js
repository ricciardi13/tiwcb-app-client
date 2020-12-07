import React from 'react'
import store from '../store'
import './Dashboard.css'

export default class Dashboard extends React.Component {
    store = store.reverse()

    render(){
        return(
            <main>
                <h2>Dashboard</h2>
                <section className='my-stats'>
                    <h3>My Stats</h3>
                    <table>
                        <tr>
                            <th></th>
                            <th>Distance (miles)</th>
                            <th>Time (minutes)</th>
                            <th>Average Speed (MPH)</th>
                        </tr>
                        <tr>
                            <td>This Week</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>This Month</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>This Year</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </section>
                {/* <section className='top-runs'>
                    <h3>My Top Chases</h3>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Miles</th>
                            <th>Time</th>
                            <th>Average Speed</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </section> */}
                <section className='all-runs'>
                    <h3>All My Chases</h3>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Chased By</th>
                            <th>Distance (miles)</th>
                            <th>Time (minutes)</th>
                            <th>Average Speed (MPH)</th>
                        </tr>
                        {store.map(chase =>
                            <tr>
                                <td>{chase.date}</td>
                                <td>{chase.chasedBy}</td>
                                <td>{chase.distance}</td>
                                <td>{chase.time}</td>
                                <td>{(chase.distance / (chase.time / 60)).toFixed(2)}</td>
                            </tr>
                        )}                        
                    </table>
                </section>
            </main>
        )
    }
}