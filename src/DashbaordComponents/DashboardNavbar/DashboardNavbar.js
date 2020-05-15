import React,{Component} from 'react';
import Logo from '../../assets/images/Palette-logo.svg';
import TimelineLogo from '../../assets/images/timeline-icon.svg';
import LogoutLogo from '../../assets/images/logout.svg';
import cookie from 'react-cookies';
import firebase from '../../utils/firebase';

import './DashboardNavbar.css';

class DashboardNavbar extends Component {

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
        return(
            <div className="navbar-component">
                <img src={Logo} alt="logo" />
                <h4><strong>Dashboard</strong></h4>
                <div className="nav-button-div">
                    <button className="navbar-buttons-dashboard"><img src={TimelineLogo} alt="timeline-icon"/></button>
                    <button className="navbar-buttons-dashboard" onClick={this.signOut}><img src={LogoutLogo} alt="logout-icon"/></button>
                </div>
            </div>
        )
    }
}

export default DashboardNavbar;