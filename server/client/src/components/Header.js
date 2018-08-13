import React, {Component} from 'react';
import {connect} from 'react-redux';
import Payments from './Payments'

class Header extends Component{
    renderContent(){
        switch (this.props.auth){
            case null:
                return;
            case false:
                return(
                    <li><a href="/auth/google">Login with google</a></li>
                );
            default:
                return([
                    <li key="1"><Payments/></li>,
                    <li key="3" style = {{margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a>></li>
                    ])
                ;
        }
    }
    render(){
        console.log("test",this.props);
        return(
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="left brand-logo">Emaily</a>
                        <ul  className="right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {auth: state.auth};
}
export default connect(mapStateToProps)(Header)
