import React, {Component} from 'react';
import logo from '../assets/images/Palette-logo.svg';
import logout from '../assets/images/logout.svg';
import Countdown from 'on-react-countdown';
import cookie from 'react-cookies';
import firebase from '../utils/firebase';

import './Dashboard.css';
import Updates from '../components/Updates/Updates';

class Dashboard extends Component {
    
    signOut = () => {
        console.log('sign out clicked')
        firebase.auth().signOut().then(function() {
            console.log('inside signout auth')
            cookie.remove('PALETTE', { path: '/' })
            window.location.href = "/";
          })
          .catch(function(error) {
              console.log(error);
          });
    }

    render() {
        const text = {
            days: 'd',
            hours: 'h',
            minutes: 'm',
            seconds: 's',
          }
        return(
            <div>
                <div className="navbar">
                    <img src={logo} alt='palette-logo' className="paletteLogoDashboard" />
                    <span className="paletteTitleDashboard"><strong>Palette ‘20</strong> </span>
                    <button onClick={this.signOut} className="logout-button"><img src={logout} alt='logout' /></button>
                </div>

                <div className="center-text">
                    <div className="dashboard-content">
                        <p className="comingTitleDashboard">Coming to your screen in <strong className="timer-together"><Countdown end={1590100200} wordsEndingOff={true} text={text} /></strong></p>
                    </div>
                    <div className="end-updates">
                        <Updates />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;